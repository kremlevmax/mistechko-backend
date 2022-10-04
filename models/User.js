const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  email: String,
  phoneNumber: String,
});

module.exports = mongoose.model("User", userSchema);
