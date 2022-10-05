const { StatusCodes } = require("http-status-codes");
const CustomAPIErrors = require("./custom-api-error");

class NotFoundError extends CustomAPIErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
