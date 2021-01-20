const {Cart, validate} = require("../models/cart");
const {Product} = require("../models/product");
const express = require("express");
const mongoose = require("mongoose");
const ClientError = require("../models/ClientError");
const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const cart = await Cart.find();
        res.status(200).send(cart)
    }
    catch(err) {
        next(new ClientError("Unexpected error occurred", 500));
    }
});

router.get("/:id", async(req, res, next) => {
    let id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new ClientError("Invalid ID", 400));

    try {
        const cart = await Cart.findById(id);
        if(!cart) return next(new ClientError(`cart cart with id ${id} does not exist`, 404));

        res.status(200).send(cart);
    }
    catch(err) {
        next(new ClientError("Unexpected error occurred", 500));
    }
});

module.exports = router;

