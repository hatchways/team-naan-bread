const Availability = require("../models/Availability");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
//the Profile is also created on in controllers/auth when the user creates a new account. However- only the email and id fields will be filled

exports.updateAvailability = asyncHandler(async (req, res) => {
  const avails = req.body.values.availability
  for (let prop in avails) {
    if (!avails[prop]) {
      delete avails[prop];
      //it will remove fields who are undefined or null
    }
  }

  availability = await Availability.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(req.body.values._id) },
    { availability: avails },
    { new: true, strict: false }
  );

  //if there is no availability for whatever reason- create it
  if (!availability) {
    availability = await Availability.create({
      _id: new mongoose.Types.ObjectId(req.body.values._id),
      availability: avails,
    });
  }

  res.status(200).json(availability);
});
exports.findAvailabilityById = asyncHandler(async (req, res) => {
  const availability = await Availability.findById(req.body.id);

  if (!availability) {
    res.status(404).send("No availability found for ID");
  }
  res.status(200).json(availability.availability);
});

exports.findAllAvailability = asyncHandler(async (req, res) => {
  const availabilities = await Availability.find({});

  if (!availabilities) {
    res.status(404).send("No availabilities found");
  }
  res.status(200).json({ availabilities });
});
