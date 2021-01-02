const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    let schema = {
        name: Joi.string().required().min(3),
        email: Joi.string().required().email()
    }
}