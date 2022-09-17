const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB")
});

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    }, filename: (req, file, callback) => {
        callback(null, req.body.name)
    }
})

const upload = multer({ storage: storage });
app.post("/api/uploads", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded");
})

//middleware
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(5001, () => {
    console.log("Backend server is running")
})