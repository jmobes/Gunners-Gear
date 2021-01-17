const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true, min: 0},
    category: {type: String, required: true}
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
    let schema = Joi.object({
        image: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().min(0).required(),
        category: Joi.string().required()
    });
    
    return schema.validate(product);
}

module.exports.Product = Product;
module.exports.validate = validateProduct;