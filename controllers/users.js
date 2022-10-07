const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
} = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });

  res
    .status(StatusCodes.CREATED)
    .json({ username: user.username, token: user.getToken() });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email | !password) {
    throw new BadRequestError("Provide username and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("User doesn't exist");
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new UnauthenticatedError("Wrong password");
  }

  res
    .status(StatusCodes.OK)
    .json({ username: user.username, token: user.getToken() });
};

module.exports = { register, login };
