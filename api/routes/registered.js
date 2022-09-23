const router = require("express").Router();
const Registration = require("../models/Registration");

router.post("/registration", async (req, res) => {
    try {
        const newRegistration = new Registration({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        const registration = await newRegistration.save(registration);
        res.status(200).json()
        // "Thank you for your message. We will contact you soon."
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router