require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  if (process.env.NODE_ENV !== 'production' && mongoose.connection.readyState === 1) {
    console.log('Seeding database...');
    mongoose.connection.dropDatabase();
    const user = await User.create({
      username: 'demo',
      email: 'demo@email.com',
      password: 'password',
    });
  }

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
