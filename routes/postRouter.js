const express = require("express");
const controller = require("../controllers/postController");
const { validateObjectIdMiddleware } = require("../middlewares/objectIdMiddleware");
const { validatePostMiddleware } = require("../middlewares/postMiddleware");

const router = express.Router();

router.get("/" , controller.getAllPosts);

router.get("/:id", validateObjectIdMiddleware , controller.getSinglePost);

router.post("/", validatePostMiddleware, controller.addNewPost);

module.exports = router;