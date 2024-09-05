const express = require("express");
const User = require("../models/userModel");

const controller = require("../controllers/userController");
const { registerUserMiddleware, loginUserMiddleware } = require("../middlewares/userMiddleware");

const router = express.Router();

router.post("/register", registerUserMiddleware, controller.registerUser);

router.post("/login", loginUserMiddleware, controller.loginUser);

module.exports = router;