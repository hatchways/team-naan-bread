const PetProfile = require("../models/PetProfile");
const asyncHandler = require("express-async-handler");

exports.createPetProfile = asyncHandler(async (req, res, next) => {
  const { petName, ownerID, petType, petAge, petStatus } = req.body;
  if (!petName) {
    res.status(404);
    throw new Error("No pet name provided");
  }
  if (!ownerID) {
    res.status(404);
    throw new Error("No owner id provided");
  }
  
  const petProfile = await PetProfile.create({
    petName,
    ownerID,
    petType,
    petAge,
    petStatus,
  });
  res.status(200).json({ petProfile });
});

exports.updatePetProfile = asyncHandler(async (req, res, next) => {
  const values = ({ _id, petName, ownerID, petType, petAge, petStatus } =
    req.body);
    if (!petName) {
      res.status(404);
      throw new Error("No pet name provided");
    }
    if (!ownerID) {
      res.status(404);
      throw new Error("No owner id provided");
    }

    for (let prop in values) {
      if (!values[prop]) {
        delete values[prop];
      }
    }

  const petProfile = await PetProfile.findOneAndUpdate(
    { _id: values._id },
    values,
    { new: true, strict: false }
  );

  res.status(200).json({ petProfile });
});
exports.findPetProfiles = asyncHandler(async (req, res, next) => {
  if (!ownerID) {
    res.status(404);
    throw new Error("No owner id provided");
  }
  const petProfile = await petProfile.findById({ ownerID: req.body.ownerID });
  if (!petProfile) {
    res.status(404);
    throw new Error("No pet profiles found for ID");
  }

  res.status(200).json(petProfile);
});

exports.getAllPetProfiles = asyncHandler(async (req, res, next) => {
  const petProfiles = await PetProfile.find({});

  if (!petProfiles) {
    res.status(404);
    throw new Error("No profiles found");
  }

  res.status(200).json({ petProfiles });
});
