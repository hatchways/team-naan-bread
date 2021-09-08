const User = require("../models/User");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const { cloudinary } = require("../utils/cloudinary");

// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: "i" },
    });
  }

  if (!users) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: users });
});

const deletePhoto = async (user) => {
  await cloudinary.uploader.destroy(user.profilePhoto.publicId);
  user.profilePhoto = null;
};

exports.uploadProfilePhoto = asyncHandler(async (req, res, next) => {
  const image = req.file;
  const profile = await Profile.findById(req.user.id);
  if (!profile) {
    return res.sendStatus(404);
  }
  if (profile.profilePhoto.url) {
    await deletePhoto(profile);
  }
  profile.profilePhoto = {
    url: image.path,
    publicId: image.filename,
  };
  profile.save();

  res.sendStatus(200);
});
exports.deleteProfilePhoto = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.user.id);
  if (!profile) {
    return res.sendStatus(404);
  }

  await deletePhoto(profile);
  profile.save();

  res.sendStatus(200);
});
