require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const products = require("./routes/products.js");
const checkout = require("./routes/checkout");
const users = require("./routes/users");
const ClientError = require("./models/ClientError.js");

mongoose.connect("mongodb://localhost/gunnersgear", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log("Connected to GunnersGear DB..."))
    .catch(err => console.error("Could not connect to the database"));

app.use(express.json());
app.use("/api/products", products);
app.use("/api/checkout", checkout);
app.use("/api/users", users);

app.use((req, res, next) => {
    const error = new ClientError("Could not find this route", 404);
    next(error);
});

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.send(error.message || "An unknown error occurred");
});

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
