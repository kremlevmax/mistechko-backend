const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please, provide username"],
    unique: true,
  },
  password: {
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

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

UserSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (enteredPassword) {
  const isPasswordRight = await bcrypt.compare(enteredPassword, this.password);
  return isPasswordRight;
};

module.exports = mongoose.model("User", UserSchema);
