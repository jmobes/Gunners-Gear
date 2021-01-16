const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const {Product, validate} = require("../models/product");
const ClientError = require("../errorObj/client-error");

router.get("/", async(req, res, next) => {
    try {
        const products = await Product.find().sort("title");
        res.status(200).send(products)
    }
    catch(err) {
        next(err)
    }
});

router.get("/:id", async(req, res, next) => {
    let id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("Invalid ID");

    try {
        const product = await Product.findById(id);
        if(!product) return res.status(404).send(`Product with the ID ${id} does not exist.`);
        res.status(200).send(product);
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;