const asyncHandler = require('express-async-handler');
const Event = require('../models/Event');

exports.createEvent = asyncHandler(async (req, res, next) => {
  const { name, eventDate, location, description, address } = req.body;
  const host = req.user.id;
  const newEvent = await Event.create({ name, eventDate, location, description, address, host });
  return res.status(201).json(newEvent);
});

exports.editEvent = asyncHandler(async (req, res, next) => {
  const { name, eventDate, location, description, address } = req.body;
  const hostId = req.user.id;
  const eventId = req.query.id;
  const petEvent = await Event.findById(eventId);
  if (!petEvent) {
    return res.sendStatus(404);
  }
  if (!petEvent.host.equals(hostId)) {
    return res.sendStatus(403);
  }
  const editedEvent = await Event.findOneAndUpdate(
    { _id: eventId },
    { name, eventDate, location, description, address },
    { new: true },
  );

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

exports.cancelAttendanceToEvent = asyncHandler(async (req, res, next) => {
  const canceledAttendeeId = req.user.id;
  const eventId = req.params.id;
  if (!eventId) {
    return res.sendStatus(400);
  }
  const petEvent = await Event.findById(eventId);
  if (!petEvent) {
    res.status(404);
    throw new Error('event not found');
  }

  if (!petEvent.attendees.includes(canceledAttendeeId)) {
    res.status(400);
    throw new Error('user is not scheduled to attend this event');
  }

  await Event.updateOne({ _id: eventId }, { $pull: { attendees: canceledAttendeeId } });
  return res.status(200).json(petEvent);
});

exports.getOneEvent = asyncHandler(async (req, res, next) => {
  const eventId = req.params.id;
  if (!eventId) {
    return res.sendStatus(400);
  }
  const petEvent = await Event.findById(eventId)
    .populate('attendees', 'firstName lastName profilePhoto')
    .populate('host', 'firstName lastName profilePhoto');
  if (!petEvent) {
    return res.sendStatus(404);
  }

  return res.status(200).json(petEvent);
});
exports.getOneSimpleEvent = asyncHandler(async (req, res, next) => {
  const eventId = req.params.id;
  if (!eventId) {
    return res.sendStatus(400);
  }
  const petEvent = await Event.findById(eventId);
  if (!petEvent) {
    return res.sendStatus(404);
  }

  return res.status(200).json(petEvent);
});

exports.removeEvent = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.params.id;
  if (!eventId) {
    return res.sendStatus(400);
  }
  const petEvent = await Event.findById(eventId);
  if (!petEvent) {
    res.status(404);
    throw new Error('event not found');
  }

  if (!petEvent.host.equals(userId)) {
    res.status(401);
    throw new Error('you are not authorized to delete this event');
  }
  const deletedEvent = await Event.findByIdAndDelete(eventId);
  return res.sendStatus(204);
});

exports.getEventsNearby = asyncHandler(async (req, res, next) => {
  const { userCoordinates } = req.body;

  if (!userCoordinates) {
    res.status(400);
  }

  const nearbyEvents = await Event.where('location').near({
    center: {
      type: 'Point',
      coordinates: userCoordinates,
    },

    maxDistance: 100 * 1000,
  });

  return res.status(200).json(nearbyEvents);
});
