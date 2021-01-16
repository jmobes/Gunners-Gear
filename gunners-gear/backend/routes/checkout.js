const Checkout = require("../models/checkout");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const checkout = await Checkout.find().populate("title");
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
        const checkout = Checkout.findById(id);
        if(!checkout) return res.status(404).send("checkout cart with given id does not exist");
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;

