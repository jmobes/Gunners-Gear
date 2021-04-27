const mongoose = require("mongoose");
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const ClientError = require("../models/ClientError");
const auth = require("../middleware/auth");
const jwt_decode = require("jwt-decode");
require("dotenv").config();

router.get("/", auth, async (req, res, next) => {
  try {
    const users = await User.find().sort("email");
    res.status(200).send(users);
  } catch (err) {
    next(new ClientError("Unexpected error occurred", 500));
  }
});

router.get("/logout", (req, res, next) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send("logged out");
});

router.get("/:id", auth, async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return next(new ClientError("Invalid ID", 400));

  const token = req.headers.token;
  const decoded = jwt_decode(token);
  if (decoded.user !== id) {
    return next(new ClientError("Restricted access", 403));
  }
  let user;
  try {
    user = await User.findById(id);
    if (!user)
      return next(new ClientError("Cannot find user with the given ID", 404));
  } catch (err) {
    return next(new ClientError("Unexpected error", 500));
  }

  res.status(200).send(user);
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return next(new ClientError(error.details[0].message, 400));

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return next(new ClientError("User already registered", 400));

    user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const savedUser = await user.save();

    const token = jwt.sign(
      { user: savedUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      email: user.email,
      _id: user._id,
      token: token,
    });
  } catch (err) {
    return next(new ClientError("Unexpected error", 500));
  }
});

router.post("/login", async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(new ClientError("Please enter an email and password", 401));
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser)
      return next(new ClientError("Invalid email or password", 401));

    const authenticated = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!authenticated)
      return next(new ClientError("Invalid email or password", 401));

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      user: existingUser._id,
      token: token,
    });
  } catch (ex) {
    return next(new ClientError(ex.message, 500));
  }
});

module.exports = router;
