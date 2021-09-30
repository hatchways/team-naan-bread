const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  //Note that longitude comes first in a GeoJSON coordinate array, not latitude
  coordinates: {
    type: [Number],
    required: true,
  },
});

const eventSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: {
      type: pointSchema,
      required: true,
      index: '2dsphere',
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile',
      },
    ],
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
    },
    description: String,
    address: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Event', eventSchema);
