const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true
  },
  sitter_id: {
    type: Number,
    required: true,
    unique: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
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