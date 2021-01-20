const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const {productSchema} = require("./product");

const cartSchema = new mongoose.Schema({
    products: [{
        type: productSchema,
    }]
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports.Cart = Cart;
