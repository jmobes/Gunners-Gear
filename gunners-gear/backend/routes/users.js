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
        next(new ClientError("Unexpected error occurred", 500));
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new ClientError("Unexpected error occurred", 500));

    const user = await User.findById(id);
    if(!user) return next(new ClientError("Cannot find user with the given ID", 404));;

    res.status(200).send(user);
});

router.post("/", async (req, res) => {
    const {error} = validate(req.body);
    if(error) return next(new ClientError(error.details[0].message, 400));;

    let user = await User.findOne({email: req.body.email});
    if(user) return next(new ClientError("User already registered", 400));;

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