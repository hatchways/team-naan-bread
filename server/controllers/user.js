const User = require("../models/User");
const Profile = require('../models/Profile');
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

  res.status(200).json({ users });
});

