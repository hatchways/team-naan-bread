const mongoose = require('mongoose');
const eventSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
      address: { type: String },
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
  },
  { timestamps: true },
);

module.exports = mongoose.model('Event', eventSchema);
