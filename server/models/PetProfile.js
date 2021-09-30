const mongoose = require('mongoose');

const petProfileSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    ownerID: {
      type: String,
      required: true,
    },
    petType: {
        type: String,
    },
    petAge: {
        type: Number,
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
