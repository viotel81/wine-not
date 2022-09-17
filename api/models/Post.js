const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        max: 50,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: ""
    },
    // likes: {
    //     type: Array,
    //     default: []
    // },
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);