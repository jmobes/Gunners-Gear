const {Checkout, validate} = require("../models/checkout");
const {Product} = require("../models/product");
const express = require("express");
const mongoose = require("mongoose");
const ClientError = require("../errorObj/client-error");
const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const checkout = await Checkout.find().populate("products");
        res.status(200).send(checkout)
    }
    catch(err) {
        next(err);
    }
});

router.get("/:id", async(req, res, next) => {
    let id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("Invalid id");

    try {
        const checkout = await Checkout.findById(id);
        if(!checkout) throw new ClientError(404, `Checkout cart with id ${id} does not exist`);

        res.status(200).send(checkout);
    }
    catch(err) {
        next(err);
    }
});

router.post("/", async(req, res, next) => {
    const {error} = validate(req.body);
    if(error) res.send(error.details[0].message);

    const {productId} = req.body;

    try {
        const product = await Product.findById(productId);
        if(!product) throw new ClientError(404, "Could not find product with given ID");

        const checkout = await Checkout.findByIdAndUpdate("6003effcc403f638d0c82eea", {
            $push: {products: productId},
        }, {new: true});
        
        if(!checkout) throw new ClientError(404, "Could not find checkout with given ID");

        res.status(201).send(checkout);

    }
    catch(err) {
        next(err);
    }
});

module.exports = router;

