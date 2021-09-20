const asyncHandler = require('express-async-handler');
const Profile = require('../models/Profile');
const Request = require('../models/Request');
const Review = require('../models/Review');
const User = require('../models/User');
const mongoose = require('mongoose');
const { sendNotification } = require('../services/notifications');

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

  const reviewerProfile = await Profile.findById(reviewerId);

  const requesterFirstNameOrSomeone =
    reviewerProfile && reviewerProfile.firstName ? reviewerProfile.firstName : 'someone';

  const notificationTitle = `${requesterFirstNameOrSomeone} gave you a review of ${rating} stars`;

  const currentUser = await User.findById(reviewerId);
  await sendNotification(req.io, {
    userId: profileReviewedId,
    title: notificationTitle,
    context: {
      profilePhotoURL: currentUser.profilePhoto.url,
      rating: rating,
    },
    notificationType: 'review',
  });
  return res.status(201).json(review);
});

exports.getAllReviewsForProfile = asyncHandler(async (req, res, next) => {
  const profileId = req.params.id;
  const reviews = await Review.find({ profileReviewedId: mongoose.Types.ObjectId(profileId) });

  const aggregation = await Review.aggregate([
    { $match: { profileReviewedId: mongoose.Types.ObjectId(profileId) } },

    {
      $group: {
        _id: null,
        averageRating: { $avg: '$rating' },
      },
    },
  ]);
  const profileAverageRating = aggregation[0].averageRating;
  return res.status(200).json({ reviews, profileAverageRating });
});
