const router = require("express").Router();
const Subscribtion = require("../models/Subscribtion");

router.post("/", async (req, res) => {
    const newSubscribtion = new Subscribtion(req.body);
    try {
        const savedSubscribtion = await newSubscribtion.save();
        res.status(200).json(savedSubscribtion)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router