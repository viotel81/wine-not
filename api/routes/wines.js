const router = require("express").Router();
const Wine = require("../models/Wine");

// Add new wine to catalogue
router.post("/", async (req, res) => {
    const newWine = new Wine(req.body);
    try {
        const savedWine = await newWine.save();
        res.status(200).json(savedWine)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Update existing wine

router.put('/:id', async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        if (wine.username === req.body.username) {
            try {
                const updatedWine = await Wine.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedWine);
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You only can update Your added wine!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete wine

router.delete('/:id', async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        if (wine.username === req.body.username) {
            await wine.delete();
            res.status(200).json("Your wine has been deleted")
        } else {
            res.status(403).json("You only can delete Your added wine!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get wine

router.get("/:id", async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        console.log(wine);
        res.status(500).json(wine)
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all wines

router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let wines;
        if (username) {
            wines = await Wine.find({ username });
        }
        else {
            wines = await Wine.find();
        }
        res.status(200).json(wines);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router

