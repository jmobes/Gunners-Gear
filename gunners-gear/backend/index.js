require("dotenv").config();
const express = require("express");
const products = require("./routes/products.js");
const app = express();

app.use(express.json());
app.use("/api/products", products);

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
