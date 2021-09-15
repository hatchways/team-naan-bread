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
    customerId: {
      type: String,
      default: "",
    },
    serviceId: {
      type: String,
      default: "",
    },
    hourlyRate: {
      type: Number,
    },
    reviewsReceived: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = Profile = mongoose.model('profile', profileSchema);
