const NewsletterSubscriber = require("../models/newsletterModel");

async function createNewsletterSubscriber(req, res) {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: "Email required" });

        const existedSubscriber = await NewsletterSubscriber.find({ email });
        if (existedSubscriber.length > 0)
            return res.status(409).json({
                error: "This email is already subscribed the newsletter",
            });

        const newsletterSubscriber = new NewsletterSubscriber({ email });

        const result = await newsletterSubscriber.save();
        res.status(201).json({
            message: "You successfully subscribed the newsletter",
        });
    } catch (ex) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function deleteNewsletterSubscriber(req, res) {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: "Email is required" });

        const existedSubscriber = await NewsletterSubscriber.find({ email });

        if (existedSubscriber.length === 0)
            return res
                .status(404)
                .json({ error: "No subscriber is found with this email" });

        const deletedSubscriber = await NewsletterSubscriber.findByIdAndDelete(
            existedSubscriber._id
        );

        return res.status(204);
    } catch (ex) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    createNewsletterSubscriber,
    deleteNewsletterSubscriber,
};
