const express = require("express");
const { forgetPassword } = require("../controllers/passwordForgetController");

const router = express.Router();

router.post("/", forgetPassword);

module.exports = router;    
