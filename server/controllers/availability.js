const Availability = require("../models/Availability");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
//the Profile is also created on in controllers/auth when the user creates a new account. However- only the email and id fields will be filled


exports.updateAvailability = asyncHandler(async (req, res, next) => {
    const values = { 
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
     } = req.body;

     for(let prop in values) if(!values[prop]) delete values[prop];//it will remove fields who are undefined or null

     const availability = await Profile.findOneAndUpdate({_id: values._id}, values, {new: true, strict: false});

     res.status(200).json({success: {availability}});

})
exports.findAvailabilityById = asyncHandler(async (req, res, next) => {

     const availability = await Availability.findById(req.body.id);
     if (!availability) {
        res.status(404);
        throw new Error("No availability found for ID");
      }
    
      res.status(200).json(availability);
})

exports.findAllAvailability = asyncHandler(async (req, res, next) => {
  const availabilities = await Availability.find({});

  if (!availabilities) {
      res.status(404);
      throw new Error("No availabilities found");
    }

  res.status(200).json({ availabilities});
})