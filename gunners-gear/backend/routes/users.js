const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {User, validate} = require("../models/user");

router.get("/", async (req,res) => {
  const users = await User.find();

  res.status(200).send(users);
});

router.get("/:id", async (req,res) => {
  const user = await User.findById(req.params.id);
  if(!user) res.status(404).send("Could not find user by the given ID");

  res.status(200).send(User);
}

router.put("/:id", async (req,res) => {
  const {error} = validate(req.body);
  if(error) res.status(400).send("bad request");

  const user = User.findByIdAndUpdate({
    name: req.body.name,
    email: req.body.email
  });

});

module.exports = router;
