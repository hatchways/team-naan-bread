const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  },
  {
    timestamps: true,
  },
);

module.exports = Profile = mongoose.model('profile', profileSchema);
