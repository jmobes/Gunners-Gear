require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const products = require("./routes/products.js");
const users = require("./routes/users");
const orders = require("./routes/orders");
const ClientError = require("./models/ClientError.js");
const path = require("path");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to GunnersGear DB..."))
  .catch((err) => console.error(err.message));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
app.use(express.static("public"));
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/user/orders", orders);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  console.log(path.join(__dirname, "frontend/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.use((req, res, next) => {
  const error = new ClientError("Could not find this route", 404);
  next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    error: error.message || "An unknown error occurred",
  });
});

let port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
