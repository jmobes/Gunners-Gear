const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const checkoutSchema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }]
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

function validateCheckout(checkout) {
    let schema = Joi.object({
        productId: Joi.objectId().required()
    });

    return schema.validate(checkout);
}

module.exports.Checkout = Checkout;
module.exports.validate = validateCheckout;