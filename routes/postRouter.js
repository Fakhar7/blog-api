const express = require("express");
const controller = require("../controllers/postController");
const { validateObjectIdMiddleware } = require("../middlewares/objectIdValidatorMiddleware");

const router = express.Router();

router.get("/" , controller.getAllPosts);

router.get("/:id", validateObjectIdMiddleware , controller.getSinglePost);

module.exports = router;