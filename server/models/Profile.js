const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    gender: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    availabilityDates: {},
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    whereYouLive: {
      type: String,
    },
    describeYourself: {
        type: String,
    },
    profilePhoto: {
        url: String,
        publicId: String,
    },
    profilePhoto: {
      url: String,
      publicId: String,
    },
    requestsReceived: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request',
      },
    ],
    requestsSubmitted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request',
      },
    ],
    reviewsReceived: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
      },
    ],
    customerId: {
      type: String,
    },
    serviceId: {
      type: String,
    },
    hourlyRate: {
      type: Number,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Profile = mongoose.model('profile', profileSchema);
