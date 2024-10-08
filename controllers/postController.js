const Post = require("../models/postModel");

async function getAllPosts(req, res) {
    try {
        const posts = await Post.find().populate("category").select("-__v");
        res.status(200).send(posts);
    } catch (ex) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function getSinglePost(req, res) {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) return res.status(404).json({ error: "Post not found" });

        res.status(200).json(post);
    } catch (ex) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getAllPosts,
    getSinglePost,
};
