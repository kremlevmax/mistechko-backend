const { StatusCodes } = require("http-status-codes");
const CustomAPIErrors = require("./custom-api-error");

class BadRequestError extends CustomAPIErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
