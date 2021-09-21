require('dotenv').config();
const Profile = require('../models/Profile');
const asyncHandler = require('express-async-handler');
const stripe = require('stripe')(process.env.STRIPE);

exports.payPetSitter = asyncHandler(async (req, res) => {
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
    if (customerId === '' && userId) {
      const userProfile = await Profile.findById(userId);
      if (userProfile.customerId) {
        res.status(400);
        throw new Error('User has already a customer Id');
      } else if (email !== userProfile.email) {
        res.status(400);
        throw new Error('Email invalid');
      } else {
        const customer = await stripe.customers.create({email, name});
        userProfile.customerId = customer.id;
        customerId = customer.id;
        userProfile.save();
      }
    }
  
    if (serviceId === '' && sitterId) {
      const sitterProfile = await Profile.findById(sitterId);
      if (sitterProfile.serviceId) {
        res.status(400)
        throw new Error('The sitter has already registered a service');
      } else {
        const service = await stripe.products.create({
          name: "Pet sitting",
          unit_label: "Hour(s)",
        });
        sitterProfile.serviceId = service.id;
        serviceId = service.id;
        sitterProfile.save();
      }
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