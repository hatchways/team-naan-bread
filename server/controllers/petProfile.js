const PetProfile = require("../models/PetProfile");
const asyncHandler = require("express-async-handler");
//the Profile is also created on in controllers/auth when the user creates a new account. However- only the email and id fields will be filled

exports.createPetProfile= asyncHandler(async (req, res, next) => {

    const { 
        petName,
        ownerID,
        petType,
        petAge,
        petStatus,
     } = req.body;

    const petProfile = await PetProfile.create({
        petName,
        ownerID,
        petType,
        petAge,
        petStatus,
      })

      res.status(200).json({petProfile});
})

exports.updatePetProfile = asyncHandler(async (req, res, next) => {
    const values = {
        _id,
        petName,
        ownerID,
        petType,
        petAge,
        petStatus,
     } = req.body;

     for(let prop in values) if(!values[prop]) delete values[prop];//it will remove fields who are undefined or null

     const petProfile = await PetProfile.findOneAndUpdate({_id: values._id}, values, {new: true, strict: false});

     res.status(200).json({petProfile});

})
exports.findPetProfilesByOwnerId = asyncHandler(async (req, res, next) => {

     const petProfile = await petProfile.findById({ownerID: req.body.ownerID});
     if (!petProfile) {
        res.status(404);
        throw new Error("No pet profile found for ID");
      }
    
      res.status(200).json(petProfile);
})

exports.findAllPetProfiles = asyncHandler(async (req, res, next) => {
    const petProfiles = await PetProfile.find({});

    if (!petProfiles) {
        res.status(404);
        throw new Error("No profiles found");
      }

    res.status(200).json({ petProfiles });
})