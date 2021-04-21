const express = require("express");
const router = express.Router;
const User = require("../models/User");

// GET :  RETURN ALL USERS

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("fail to get users");
    }
});

// POST :  ADD A NEW USER TO THE DATABASE

router.post("/", async (req, res) => {
    try {
        const { name, age, favoriteFoods } = req.body;
        const newUser = new User({ name, age, favoriteFoods });
        await newUser.save();
    } catch (error) {
        res.status(500).send("fail to add new user");
    }
});

// PUT : EDIT A USER BY ID

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { name, age, favoriteFoods } = req.body;

        const user = await User.findByIdAndUpdate(
            { _id: id },
            { $set: { name, age, favoriteFoods } }
        );
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("fail to edit user");
    }
});

// DELETE : REMOVE A USER BY ID

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndRemove({ _id: id });
        res.status(200).send("user deleted");
    } catch (error) {
        res.status(500).send("fail to edit user");
    }
});

module.exports = router;
