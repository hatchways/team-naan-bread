const asyncHandler = require('express-async-handler');
const Event = require('../models/Event');

exports.createEvent = asyncHandler(async (req, res, next) => {
  const { name, eventDate, location } = req.body;
  const host = req.user.id;
  const newEvent = await Event.create({ name, eventDate, location, host });

  return res.status(201).json(newEvent);
});

exports.editEvent = asyncHandler(async (req, res, next) => {
  const { name, eventDate, location } = req.body;
  const hostId = req.user.id;
  const eventId = req.query.id;
  const petEvent = await Event.findById(eventId);
  if (!petEvent) {
    return res.sendStatus(404);
  }
  if (!petEvent.host.equals(hostId)) {
    return res.sendStatus(403);
  }
  const editedEvent = await Event.findOneAndUpdate({ _id: eventId }, { name, eventDate, location }, { new: true });

  return res.status(201).json(editedEvent);
});

exports.attendEvent = asyncHandler(async (req, res, next) => {
  const attendeeId = req.user.id;
  const eventId = req.params.id;
  if (!eventId || !attendeeId) {
    return res.sendStatus(400);
  }
  const attendedEvent = await Event.findById(eventId);
  if (!attendedEvent) {
    res.status(404);
    throw new Error('event not found');
  }
  if (attendedEvent.attendees.includes(attendeeId)) {
    res.status(400);
    throw new Error('attendee already scheduled to attend this event');
  }
  await Event.updateOne({ _id: eventId }, { $push: { attendees: attendeeId } });
  return res.status(200).json(attendedEvent);
});
