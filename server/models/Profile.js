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
    birth_date:{
        type: String,
    },
    availability_dates:{},
    email: {
        type: String,
     },
    phone_number: {
        type: Number,
    },
    where_you_live: {
        type: String,
    },
    describe_yourself: {
        type: String,
    }
  },
  {
      timestamps: true
  });

  module.exports = Profile = mongoose.model("profile", profileSchema);