require('dotenv').config();
const User = require('../models/User');
const mongoose = require('mongoose');
const generateToken = require('../utils/generateToken');

exports.populate = async () => {
  if (process.env.NODE_ENV !== 'production' && mongoose.connection.readyState === 1) {
    console.log('Seeding database...');
    mongoose.connection.dropDatabase();
    const user = await User.create({
      username: 'demo',
      email: 'demo@email.com',
      password: 'password',
    });
  }
};

exports.seedDatabase = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error'));
      db.once(
        'open',
        (async = () => {
          console.log('Database is connected');
          populate();
        }),
      );
    }
  } catch (err) {}
};
