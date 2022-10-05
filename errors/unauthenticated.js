const { StatusCodes } = require("http-status-codes");
const CustomAPIErrors = require("./custom-api-error");

class UnauthenticatedError extends CustomAPIErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
