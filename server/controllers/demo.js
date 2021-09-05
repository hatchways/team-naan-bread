require("dotenv").config();
const User = require("../models/User");
const mongoose = require("mongoose");
const generateToken = require("../utils/generateToken");

exports.populate = async (_, res) => {
  if (
    process.env.NODE_ENV !== "production" &&
    mongoose.connection.readyState === 1
  ) {
    console.log("Seeding database...");
    mongoose.connection.dropDatabase();
    const user = await User.create({
      username: "demo",
      email: "demo@email.com",
      password: "password",
    });
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000,
    });

    res.status(201).json({
      success: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      },
    });
  }
};

exports.seedDatabase = async (_, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const db = mongoose.connection;
      db.on("error", console.error.bind(console, "connection error"));
      db.once(
        "open",
        (async = () => {
          console.log("Database is connected");
          populate();
        })
      );
    }
  } catch (err) {
    res.status(400);
    res.send("Error encountered on database seeding");
  }
};
