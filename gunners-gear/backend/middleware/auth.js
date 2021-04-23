const ClientError = require("../models/ClientError");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return next(new ClientError("unauthorized", 401));

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = verified.user;
    next();
  } catch (err) {
    console.error(err);
    return next(new ClientError("unauthorized", 401));
  }
}

module.exports = auth;
