//import mongoose library
const mongoose = require("mongoose");
require("dotenv").config();

//function to do a connection with database
const connectDB = async () => {
  try {
    //data base connection, use env variable to connect
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //show a log with a success conection
    console.log("database mongoose successfuly connected :) ");
  } catch (error) {
    console.log(error);
    process.exit(1); //stop all run
  }
};
//export function to get access
module.exports = connectDB;
