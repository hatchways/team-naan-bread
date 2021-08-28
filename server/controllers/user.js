const User = require("../models/User");
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
  await cloudinary.uploader.destroy(user.profile_photo.public_id);
  user.profile_photo = null;
};

exports.uploadProfilePhoto = asyncHandler(async (req, res, next) => {
  const image = req.file;
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.sendStatus(404);
  }
  if (user.profilePhoto.url) {
    await deletePhoto(user);
  }
  user.profilePhoto = {
    url: image.path,
    publicId: image.filename,
  };
  user.save();

  res.sendStatus(200);
});
exports.deleteProfilePhoto = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.sendStatus(404);
  }

  await deletePhoto(user);
  user.save();

  res.sendStatus(200);
});
