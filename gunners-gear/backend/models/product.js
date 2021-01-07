const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  img: String,
  name: String,
  description: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  let schema = {
    img: Joi.string().required(),
    name: Joi.string().max(150).required(),
    description: Joi.string().required(),
    price: Joi.number().required()
  };

  return Joi.validate(product, schema);
}

module.exports.Product = product;
module.exports.validate = validateProduct;
