const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");

const app = express();

app.use(express.json());
app.use("/api/users", users);
