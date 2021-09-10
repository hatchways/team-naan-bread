const asyncHandler = require('express-async-handler');
const Profile = require('../models/Profile');
const Request = require('../models/Request');
const Review = require('../models/Review');

exports.createReview = asyncHandler(async (req, res, next) => {
  const { rating, text, profileReviewedId, requestId } = req.body;
  const reviewerId = req.user.id;
  const profileReviewed = await Profile.findById(profileReviewedId);
  if (!profileReviewed) {
    res.status(404);
    throw Error('profile not found');
  }
  const request = await Request.findById(requestId);
  if (!request) {
    res.status(404);
    throw Error('request not found');
  }
  if (!request.sitter.equals(profileReviewedId) || !request.sitter.equals(profileReviewedId) || !request.accepted) {
    return res.sendStatus(400);
  }
  const review = await Review.create({ rating, text, profileReviewedId, reviewerId, requestId });
  await Profile.updateOne({ _id: profileReviewedId }, { $push: { reviewsReceived: review } });

  return res.status(200).json(review);
});
