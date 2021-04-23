const express = require("express");
const mongoose = require("mongoose");
const ClientError = require("../models/ClientError");
const validate = require("../models/order");
const { User } = require("../models/user");
const router = express.Router();

router.post("/:uid", async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new ClientError("ID is invalid", 400));
  }

  const { error } = validate(req.body);
  if (error) {
    return next(new ClientError(error.details[0].message), 400);
  }
  const { products } = req.body;

  let user;
  try {
    user = await User.findById(userId);
    if (!user) {
      return next(new ClientError("User from userID was not found", 404));
    }
    user.orders.push({
      products: products,
    });
    await user.save();
  } catch (err) {
    return next(new ClientError("Server error", 500));
  }

  res.send(user);
});

module.exports = router;
