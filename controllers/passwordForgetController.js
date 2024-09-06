const User = require("../models/userModel");
const { generateToken } = require("../services/tokenService");
const { pick } = require("../services/arrayService");
const sendEmail = require("../services/emailService");

const {FRONTEND_URL} = require("../config/config");


async function forgetPassword(req, res) {
    try {
        const { email } = req.body;

        const user = await User.find({ email });

        if (user.length === 0)
            return res.status(404).json({ error: "Account is not registered" });

        const token = generateToken(pick(user[0], ["username", "email"]));

        const forgetEmailLink = `${FRONTEND_URL}/resetPassword?id=${user[0]._id}&token=${token}`;

        sendEmail(user[0], forgetEmailLink);

        res.status(200).json({
            message: "We have sent an forget link to your email.",
        });
    } catch (ex) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    forgetPassword,
};
