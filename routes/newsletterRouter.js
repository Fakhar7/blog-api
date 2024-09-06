const express = require("express");
const {
    createNewsletterSubscriber,
    deleteNewsletterSubscriber,
} = require("../controllers/newsletteController");

const router = express.Router();

router.post("/", createNewsletterSubscriber);

router.delete("/", deleteNewsletterSubscriber);

module.exports = router;
