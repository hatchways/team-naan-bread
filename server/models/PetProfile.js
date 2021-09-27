const mongoose = require('mongoose');

const petProfileSchema = new mongoose.Schema(
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

module.exports = petProfile = mongoose.model('petProfile', petProfileSchema);