const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authorizationMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Invalid authorization");
  }
  try {
    const token = authorizationHeader.split(" ")[1];
    const { id, email } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id, email };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Invalid authorization");
  }
};

module.exports = authorizationMiddleware;
