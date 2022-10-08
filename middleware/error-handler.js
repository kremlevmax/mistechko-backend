const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.code === 11000) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: `${Object.values(err.keyValue)} already in use` });
  }

  if (err.name === "ValidationError") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.message.split(": ")[2] });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

module.exports = errorHandlerMiddleware;
