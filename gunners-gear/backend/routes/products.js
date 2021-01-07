const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {Product, validate} = require("../models/product");

router.get("/", async (req,res) => {
  const products = await Product.find();
  res.status(200).send(products);
});

router.get("/:id", async (req,res) => {
  const product = await Product.findById(req.params.id);
  if(!product) res.status(404).send("Could not find product by the given ID");

  res.status(200).send(product);
});

module.exports = router;
