require("dotenv").config();
const Request = require('../models/Request');
const User = require('../models/User');
const Profile = require('../models/Profile');
const Notification = require('../models/Notification');
const asyncHandler = require('express-async-handler');
const stripe = require('stripe')(process.env.STRIPE);

// @route GET /request
// @desc get requests related to a logged in user or sitter
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  // get request and related users data
  await Request.find({ $or: [{ sitter: userId }, { user: userId }] })
    .populate('user')
    .populate('sitter')
    .sort({ start: 'asc' })
    .exec(function (err, docs) {
      if (err) {
        throw new Error('Error getting requests, no results.');
      } else {
        res.send(docs);
      }
    });
});

// @route POST /request
// @desc post requests with user id and sitter id
// @access Private
exports.postRequest = asyncHandler(async (req, res, next) => {
  const { userId, sitterId, start, end, offset } = req.body;

  if (!userId || !sitterId) {
    res.status(400);
    throw new Error('The request must have valid user and sitter.');
  }

  if (!start || !end) {
    res.status(400);
    throw new Error('Requests must have start and end dates');
  }

  // create request
  const request = await Request.create({
    user: userId,
    sitter: sitterId,
    start,
    end,
    offset,
  });

  // update profiles of user and sitter
  const updatedUserProfile = await Profile.findOneAndUpdate(
    { _id: userId },
    { $push: { requestsSubmitted: request._id } },
  );
  await Profile.updateOne({ _id: sitterId }, { $push: { requestsReceived: request._id } });
  const currentUser = await User.findById(userId);

  const requestDurationInHours = parseInt((request.end - request.start) / 36e5);
  const requesterFirstNameOrSomeone =
    updatedUserProfile && updatedUserProfile.firstName ? updatedUserProfile.firstName : 'someone';

  const newNotification = await Notification.create({
    userId: sitterId,
    notificationType: 'dog sitting',
    title: `${requesterFirstNameOrSomeone} has requested your service for ${requestDurationInHours} hours`,
    context: {
      profilePhotoURL: currentUser.profilePhoto.url,
    },
  });

  res.send(request);
});

// @route PUT /request/:id?status=approved or declined
// @desc update request status finding by id
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {
  const requestState = req.query.state;
  const requestId = { _id: req.params.id };

  if (!(requestState === 'accepted' || requestState === 'declined')) {
    res.status(400);
    throw new Error('Request must be accepted or declined. Not update');
  }

  if (!requestId._id) {
    res.status(400);
    throw new Error('Request ID is required. Not updated');
  }

  await Request.findOneAndUpdate(requestId, { [requestState]: true }, { new: true }, function (err, doc) {
    if (err) {
      res.status(400);
      throw new Error(err);
    } else {
      res.send(doc);
    }
  });
});

exports.payPetSitter = asyncHandler(async (req, res, next) => {
  let { 
    userId, 
    customerId, 
    sitterId,
    email, 
    name, 
    serviceId, 
    hourlyRate, 
    hours,
    successUrl,
    cancelUrl
  } = req.body;

  const orderId = req.params.id;

  try {  
    if (customerId === "") {
      const customer = await stripe.customers.create({email, name});
      await Profile.updateOne({_id: userId}, {customerId: customer.id});
      customerId = customer.id;
    }
  
    if (serviceId === "") {
      const service = await stripe.products.create({
        name: "Pet sitting",
        unit_label: "Hour(s)",
      });
      await Profile.updateOne({_id: sitterId}, {serviceId: service.id});
      serviceId = service.id;
    };

    const price = await stripe.prices.create({
      nickname: "Metered pett sitting price",
      product: serviceId,
      unit_amount: hourlyRate * 100,
      currency: "usd",
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customerId, 
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: hours,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
    
    res.redirect(303, session.url);

  } catch (err) {
    res.status(400);
    throw new Error(err, "Error creating checkout session");
  }

});