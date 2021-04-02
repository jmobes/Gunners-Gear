const mongoose = require("mongoose");
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const ClientError = require("../models/ClientError");

router.get("/", async (req, res, next) => {
    try {
        const users = await User.find().sort("username");
        res.status(200).send(users);
    }
    catch(err) {
        next(new ClientError("Unexpected error occurred", 500));
    }
});

router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new ClientError("Invalid ID", 400));

    let user;
    try {
        user = await User.findById(id);
        if(!user) return next(new ClientError("Cannot find user with the given ID", 404));
    }
    catch(err) {
        return next(new ClientError("Unexpected error", 500));
    }

    res.status(200).send(user);
});

router.post("/", async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return next(new ClientError(error.details[0].message, 400));;

    let user = await User.findOne({email: req.body.email});
    if(user) return next(new ClientError("User already registered", 400));;

    user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
    catch(err) {
        return next(new ClientError("Unexpected error", 500));
    }

    await user.save();

    res.send({
        username: user.username,
        email: user.email,
        _id: user._id
    });
});

router.delete("/:id", async (req, res, next) => {
    const userId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(userId)) {
        return next(new ClientError("Invalid ID", 400));
    }

    let user;
    try {
        user = await User.findByIdAndRemove(userId);
    }
    catch(err) {
        return next(new ClientError("Unexpected error", 500));
    }
    
    res.send(user);
});

module.exports = router;