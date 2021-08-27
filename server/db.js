require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  if (process.env.NODE_ENV !== "test") {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  }
};

const dropDB = async () => {
  mongoose.connection.db.dropDatabase();
};
module.exports = { connectDB, dropDB };
