const mongoose = require("mongoose");
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find().sort("name");
        res.status(200).send(users);
    }
    catch(err) {
        return res.status(500).send("Unexpected error occured");
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("invalid ID");

    const user = await User.findById(id);
    if(!user) return res.status(404).send("Cannot find user with the given ID");

    res.status(200).send(user);
});

router.post("/", async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send("User already registered");

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.send({
        name: user.name,
        email: user.email,
        _id: user._id
    });

});

module.exports = router;