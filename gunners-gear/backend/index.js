require("dotenv").config();
const express = require("express");
const app = express();
const error = require("./middleware/error");
const mongoose = require("mongoose");

const products = require("./routes/products.js");
const checkout = require("./routes/checkout");

mongoose.connect("mongodb://localhost/gunnersgear", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to GunnersGear DB..."))
    .catch(err => console.error("Could not connect to the database"));

app.use(express.json());
app.use("/api/products", products);
app.use("/api/checkout", checkout);
app.use(error);

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
