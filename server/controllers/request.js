const Request = require("../models/Request");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route GET /request
// @desc get requests related to a logged user
// @access Private
exports.getRequests = asyncHandler( async (req, res, next) => {
  const loggedUserId = req.user.id;
  if (!loggedUserId) {
    res.status(401);
    throw new Error("Not authorized")
  }
  const requests = await Request.aggregate([
    {
      $lookup: {
        from: "user",
        localField: "userId",
        foreignField: "_id",
        as: "userRequest"
      }
    }
  ]);
  res.send(requests);
});

// @route POST /request
// @desc post requests with user id and sitter id
// @access Private
exports.postRequest = asyncHandler( async (req, res, next) => {
  const { userId, sitterId, start, end } = req.body;

  const user = await User.findById(userId);
  const sitter = await User.findById(sitterId);

  if (!userId || !sitterId) {
    res.status(400);
    throw new Error("The request must have valid user and sitter.");
  }

  if (!start || !end) {
    res.status(400);
    throw new Error("Requests must have start and end dates");
  }

  const request = await Request.create({
    userId: user._id,
    sitterId: sitter._id,
    start,
    end
  });

  res.send(request);
});

// @route PUT /request/:id?status=approved or declined
// @desc update request status finding by id
// @access Private
exports.updateRequest = asyncHandler( async (req, res, next) => {
  const requestState = req.query.state;
  const requestId = { _id: req.params.id };
  try {
    Request.findOneAndUpdate(
      requestId,
      { [requestState]: true },
      { new: true },
      function(err, doc) {
        if (err) {
          res.status(400).send("Request not found");
        } else {
          res.send(doc);
        }
      }
    )
  }
  catch(error) {
    res.status(400).send(error);
  }

});