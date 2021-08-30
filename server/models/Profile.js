const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const profileSchema = new mongoose.Schema({
    first_name: {
      type: String,
    },
    last_name: {
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
        type: Number,
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