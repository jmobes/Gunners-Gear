const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {Product, validate} = require("../models/product");

router.get("/", async (req,res) => {
  const products = await Product.find();
  res.status(200).send(products);
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

