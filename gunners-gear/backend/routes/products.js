const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const products = [
    {id: 1, name: "jersey"},
    {id: 2, name: "soccer ball"},
    {id: 3, name: "hat"},
    {id: 4, name: "jacket"},
    {id: 5, name: "mug"}
];

router.get("/", (req,res) => {
    console.log("hello my friend!");
    return res.send(products).status(200);
});

router.get("/:id", (req,res) => {
    const product = products.find(product => Number(req.params.id) === product.id);
    if(!product) return res.send("Could not find product with the given ID").status(404);

    return res.send(product).status(200);
});

router.post("/", (req,res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name
    };

    products.push(product);

    res.send(product);
});

module.exports = router;