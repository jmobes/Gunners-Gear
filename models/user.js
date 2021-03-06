const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { productSchema } = require("./product");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    orders: [
      {
        products: [productSchema],
        dateOrdered: {
          type: Date,
          default: Date.now,
          required: true,
        },
      },
    ],
  })
);

function validateUser(user) {
  let schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: passwordComplexity().required(),
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;
