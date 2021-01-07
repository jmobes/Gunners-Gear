const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  }
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  let schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().required()
  };

  return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;
