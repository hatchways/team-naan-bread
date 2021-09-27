const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
    },
    petType: {
        type: String,
    },
    petAge: {
        type: Number,
    },
    petAge: {
        type: String,
    },
    petStatus: {
      type: String,
      enum: [ "availabile", "not available", null ],
  },
  },
  {
    timestamps: true,
  },
);

module.exports = Profile = mongoose.model('profile', profileSchema);
