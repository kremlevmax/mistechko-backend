const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please, provide username"],
    unique: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Please, provide password"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please, provide email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  phoneNumber: String,
});

module.exports = mongoose.model("User", userSchema);
