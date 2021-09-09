const mongoose = require('mongoose');

const requestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
    },
    sitter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
      min: -12,
      max: 12,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    declined: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'requests' },
);

module.exports = Request = mongoose.model('request', requestSchema);
