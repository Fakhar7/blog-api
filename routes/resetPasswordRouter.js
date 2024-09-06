const express = require("express");
const { resetPassword } = require("../controllers/resetPasswordController");

const router = express.Router();

router.put("/", resetPassword);

module.exports = router;    
