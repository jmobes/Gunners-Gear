const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const {Product, validate} = require("../models/product");
const ClientError = require("../errorObj/client-error");

router.get("/", async(req, res, next) => {
    try {
        const products = await Product.find().sort("title")
        res.status(200).send(products)
    }
    catch(err) {
        next(err)
    }
});

router.get("/:id", async(req, res, next) => {
    let id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) throw new ClientError(400, "Invalid ID");

    try {
        const product = await Product.findById(id);
        if(!product) throw new ClientError(404, `Product with the ID ${id} does not exist.`);
        res.status(200).send(product);
    }
    catch(err) {
        next(err);
    }
});

router.post("/", async(req, res, next) => {
    const {error} = validate(req.body);
    if(error) res.send(error.details[0].message);
    const {image, title, description, price, category} = req.body;

    try {
        const product = new Product({
            image,
            title,
            description,
            price,
            category
        });
        await product.save();

        res.status(201).send(product);
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;