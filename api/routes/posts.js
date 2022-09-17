const Post = require("../models/Post");
const router = require("express").Router();

//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json("Validation error");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            await post.delete();
            res.status(200).json("Post has been deleted")
        } else {
            res.status(403).json("Validation error")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// //like-dislike a post
// router.put("/:id/like", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (!post.likes.includes(req.body.username)) {
//             await post.updateOne({ $push: { likes: req.body.username } });
//             res.status(200).json("Post has been liked")
//         }
//         else {
//             await post.updateOne({ $pull: { likes: req.body.username } });
//             res.status(200).json("Post has been disliked")
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

//get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get all posts
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        }
        else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router