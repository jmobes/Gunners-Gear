const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const checkoutSchema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    }]
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

function validateCheckout(checkout) {
    let schema = {
        ids: [Joi.objectId().required()]
    }

    return Joi.validate(checkout, schema);
}

module.exports.Checkout = Checkout;
module.exports.validate = validateCheckout;