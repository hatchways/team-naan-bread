const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    text: String,
    profileReviewedId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
    },
    reviewerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
    },
    requestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'request',
    },
  },
  { timestamps: true },
);

module.exports = Review = mongoose.model('review', reviewSchema);
