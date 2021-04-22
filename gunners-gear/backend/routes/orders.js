const express = require("express");
const mongoose = require("mongoose");
const ClientError = require("../models/ClientError");
const { validateProduct } = require("../models/product");
const { User } = require("../models/user");
const router = express.Router();

router.post("/:uid", async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new ClientError("ID is invalid", 400));
  }

  const { error } = validateProduct(req.body);
  if (error) {
    return next(new ClientError(error.details[0].message), 400);
  }
  const { image, title, description, price, category } = req.body;

  let user;
  try {
    user = await User.findById(userId);
    if (!user) {
      return next(new ClientError("Order from userID was not found", 404));
    }
    user.orders.push({
      image,
      title,
      description,
      price,
      category,
    });
    await user.save();
  } catch (err) {
    return next(new ClientError("An unexpected error occurred", 500));
  }

  res.send(user);
});

router.delete("/:uid/:pid", async (req, res, next) => {
  const userId = req.params.uid;
  const productId = req.params.pid;
  if (
    !mongoose.Types.ObjectId.isValid(userId) ||
    !mongoose.Types.ObjectId.isValid(productId)
  ) {
    return next(new ClientError("ID is invalid", 400));
  }
  let user;
  try {
    user = await User.findOne({ _id: userId });
    if (!user) {
      return next(new ClientError("User was not found with the given ID", 404));
    }
    const product = user.orders.id(productId);
    if (!product) {
      return next(new ClientError("Product was not found with the given ID"));
    }

    user.orders.pull({ _id: productId });
    await user.save();
  } catch (err) {
    return next(new ClientError("An unexpected error occurred", 500));
  }

  res.status(204).send("Product deleted");
});

module.exports = router;
