const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  offest: {
    type: Number,
    required: true,
    min: -12,
    max: 12
  },
  accepted: {
    type: Boolean,
    default: false
  },
  declined: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  }
}, { collection: 'requests' });

module.exports = Request = mongoose.model('request', requestSchema);