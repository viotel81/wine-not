const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        max: 50,
        required: true,
        unique: true
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);