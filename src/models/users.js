//imports
const mongoose = require("mongoose");

//schmea
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //add a date when register was created
  }
);

//model
const User = mongoose.model("User", userSchema);

//export
module.exports = User;
