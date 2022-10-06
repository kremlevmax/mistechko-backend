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
  return jwt.sign({ id: this._id, username: this.username }, "jwtSecret", {
    expiresIn: "30d",
  });
};

module.exports = mongoose.model("User", UserSchema);
