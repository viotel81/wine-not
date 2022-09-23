const router = require("express").Router();
const Registration = require("../models/Registration");

router.post("/", async (req, res) => {
    const newRegistration = new Registration(req.body);
    try {
        const savedRegistration = await newRegistration.save();
        res.status(200).json(savedRegistration)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router