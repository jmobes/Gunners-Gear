const {Checkout, validate} = require("../models/checkout");
const {Product} = require("../models/product");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const checkout = await Checkout.find().populate("products");
        res.status(200).send(checkout)
    }
    catch(err) {
        res.status(500).send("Unexpected error occurred");
    }
});

router.get("/:id", async(req, res) => {
    let id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("Invalid id");

    try {
        const checkout = await Checkout.findById(id);
        if(!checkout) return res.status(404).send(`Checkout cart with id ${id} does not exist`);

        res.status(200).send(checkout);
    }
    catch(err) {
        res.status(500).send("Unexpected error occurred");
    }
});

module.exports = router;

