const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const timeParams = mongoose.Schema({
    to: {
        type: String
    },
    from: {
        type: String
    }
})

const availabilitySchema = new mongoose.Schema({
    Monday: timeParams,
    Tuesday: timeParams,
    Wednesday: timeParams,
    Thursday: timeParams,
    Friday: timeParams,
    Saturday: timeParams,
    Sunday: timeParams,
  },
  {
      timestamps: true
  });

  module.exports = Availability = mongoose.model("availability", availabilitySchema);