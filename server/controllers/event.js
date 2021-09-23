const asyncHandler = require('express-async-handler');
const Event = require('../models/Event');

exports.createEvent = asyncHandler(async (req, res, next) => {
  const { name, eventDate, location } = req.body;
  const host = req.user.id;
  const newEvent = await Event.create({ name, eventDate, location, host });

  return res.status(201).json(newEvent);
});
