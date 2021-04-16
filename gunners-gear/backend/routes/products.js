const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ClientError = require("../models/ClientError");
const { Product, validate } = require("../models/product");

router.get("/", async (req, res, next) => {
  let products;
  try {
    products = await Product.find().sort("title");
  } catch (err) {
    return next(
      new ClientError("Unexpected error, could not get products", 500)
    );
  }

  res.status(200).send(products);
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ClientError("Invalid ID", 400));
  }

  let product;
  try {
    product = await Product.findById(id);
  } catch (err) {
    next(new ClientError("Unexpected error, could not get the product", 500));
  }

  if (!product) {
    return next(
      new ClientError(`Product with the ID ${id} does not exist.`, 404)
    );
  }

  res.status(200).send(product);
});

router.get("/category/:category", async (req, res, next) => {
  let products;
  let category = req.params.category;
  try {
    products = await Product.find({ category: category }).sort("title");
  } catch (err) {
    return next(
      new ClientError("Unexpected error, could not get products", 500)
    );
  }
  if (products.length === 0)
    return next(
      new ClientError("Could not find any products with the given category."),
      404
    );
  res.status(200).send(products);
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { image, title, description, price, category } = req.body;
  const product = new Product({
    image,
    title,
    description,
    price,
    category,
  });
  try {
    await product.save();
  } catch (err) {
    next(new ClientError("Unexpected error, could not create product.", 500));
  }

  res.status(201).send(product);
});

module.exports = router;
