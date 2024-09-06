const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            minLength: 6,
            required: true,
        },
    },
    { timestamps: true }
);


const NewsletterSubscriber = mongoose.model("NewsletterSubscriber", newsletterSchema);

module.exports = NewsletterSubscriber;
