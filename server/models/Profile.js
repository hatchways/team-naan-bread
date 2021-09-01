const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const profileSchema = new mongoose.Schema({
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    gender:{
        type: String,
        type: String,
    },
    birthDate:{
        type: String,
    },
    availabilityDates:{},
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
    }
  },
  {
      timestamps: true
  });

  module.exports = Profile = mongoose.model("profile", profileSchema);