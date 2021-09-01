const Request = require("../models/Request");
const User = require("../models/User");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route GET /request
// @desc get requests related to a logged in user or sitter
// @access Private
exports.getRequests = asyncHandler( async (req, res, next) => {
  const userId = req.user.id;

  // get request and related users data
  await Request.find(
    { $or: [
      { sitter: userId },
      { user: userId }
    ]}
  )
  .populate('user')
  .populate('sitter')
  .exec(function(err, docs) {
    if (err) {
      throw new Error('Error getting requests, no results.')
    } else {
      res.send(docs);
    }
  });
  
});

// @route POST /request
// @desc post requests with user id and sitter id
// @access Private
exports.postRequest = asyncHandler( async (req, res, next) => {
  const { userId, sitterId, start, end, offset } = req.body;

  if (!userId || !sitterId) {
    res.status(400);
    throw new Error("The request must have valid user and sitter.");
  }

  if (!start || !end) {
    res.status(400);
    throw new Error("Requests must have start and end dates");
  }
  
  // create request
  const request = await Request.create({
    user: userId,
    sitter: sitterId,
    start,
    end,
    offset
  });

  // update profiles of user and sitter
  await Profile.updateOne({ _id: userId }, { $push: { requestsSubmitted: request._id } });
  await Profile.updateOne({ _id: sitterId }, { $push: { requestsReceived: request._id } });

  res.send(request);
});

// @route PUT /request/:id?status=approved or declined
// @desc update request status finding by id
// @access Private
exports.updateRequest = asyncHandler( async (req, res, next) => {
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
  
  await Request.findOneAndUpdate(
    requestId,
    { [requestState]: true },
    { new: true },
    function(err, doc) {
      if (err) {
        res.status(400)
        throw new Error(err);
      } else {
        res.send(doc);
      }
    }
  )
});