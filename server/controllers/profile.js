const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
//the Profile is also created on in controllers/auth when the user creates a new account. However- only the email and id fields will be filled

exports.createProfile = asyncHandler(async (req, res, next) => {

    const profileExists = await Profile.findOne({ _id: req.user.id });

    if (profileExists) {
        res.status(400);
        throw new Error("A profile already exists for that user");
      }

    const { 
        firstName,
        lastName,
        gender,
        birthDate,
        availabilityDates,
        email,
        phoneNumber,
        whereYouLive,
        describeYourself,
     } = req.body;

    const profile = await Profile.create({
        _id: req.user.id,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthDate: birthDate,
        availabilityDates: availabilityDates,
        phoneNumber: phoneNumber,
        whereYouLive: whereYouLive,
        describeYourself: describeYourself,
        email: email,
      })

      res.status(200).json({
        success: {
          profile: {
            id: profile._id,
            firstName: profile.firstName,
            lastName: profile.lastName,
            gender: profile.gender,
            birthDate: profile.birthDate,
            availabilityDates: profile.availabilityDates,
            email: profile.email,
            phoneNumber: profile.phoneNumber,
            whereYouLive: profile.whereYouLive,
            describeYourself: profile.describeYourself,
          }
        }
      });
})

exports.updateProfile = asyncHandler(async (req, res, next) => {
    const values = { 
        _id,
        firstName,
        lastName,
        gender,
        birthDate,
        availabilityDates,
        email,
        phoneNumber,
        whereYouLive,
        describeYourself,
     } = req.body;

     for(let prop in values) if(!values[prop]) delete values[prop];//it will remove fields who are undefined or null

     const profile = await Profile.findOneAndUpdate({_id: values._id}, values, {new: true, strict: false});

     //we also have to update the email in the User model
     const user = await User.findOneAndUpdate({_id: values._id}, {email: values.email}, {new: true});

     res.status(200).json({
        success: {
          profile: {
            id: profile._id,
            firstName: profile.firstName,
            lastName: profile.lastName,
            gender: profile.gender,
            birthDate: profile.birthDate,
            availabilityDates: profile.availabilityDates,
            email: profile.email,
            phoneNumber: profile.phoneNumber,
            whereYouLive: profile.whereYouLive,
            describeYourself: profile.describeYourself,
          }
        }
      });

})
exports.findProfileById = asyncHandler(async (req, res, next) => {

     const profile = await Profile.findById(req.body.id);
     if (!profile) {
        res.status(404);
        throw new Error("No profile found for ID");
      }
    
      res.status(200).json(profile);
})

exports.findAllProfiles = asyncHandler(async (req, res, next) => {
    const profiles = await Profile.find({});

    if (!profiles) {
        res.status(404);
        throw new Error("No profiles found");
      }

    res.status(200).json({ profiles: profiles });
})