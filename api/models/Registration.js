const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 50,
        required: true
    },
    email: {
        type: String,
        max: 50,
        required: true        
    },
    message: {
        type: String,
        max: 500,
        required: true
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Registration", RegistrationSchema);