const mongoose = require("mongoose")

const WineSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true
    },
    description: {
        type:String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    photo: {
        type:String,
        default:""
    },   
    username: {
        type: String,
        required: true
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("Wine", WineSchema)

