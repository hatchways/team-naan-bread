const mongoose = require("mongoose");

const timeParams = mongoose.Schema({
    to: {
        type: String
    },
    from: {
        type: String
    }
},{
    _id: false
})

const availabilitySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    availability: {
        Monday: timeParams,
        Tuesday: timeParams,
        Wednesday: timeParams,
        Thursday: timeParams,
        Friday: timeParams,
        Saturday: timeParams,
        Sunday: timeParams,
    }
  },
  {
      timestamps: true,
      _id: false
  });

  module.exports = Availability = mongoose.model("availability", availabilitySchema);