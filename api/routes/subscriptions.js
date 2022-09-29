const router = require("express").Router();
const Subscription = require("../models/Subscription");

router.post("/", async (req, res) => {
    const newSubscription = new Subscription(req.body);
    try {
        const savedSubscription = await newSubscription.save();
        res.status(200).json(savedSubscription)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router