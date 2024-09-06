const User = require("../models/userModel");
const { decodeToken } = require("../services/tokenService");
const { hashPassword } = require("../services/authService");

async function resetPassword(req, res) {
    try {
        const { id, token, newPassword } = req.body;

        const user = await User.findById(id);

        if (!user)
            return res.status(404).json({ error: "Account is not registered" });

        const decodedUser = decodeToken(token);

        if (user.email !== decodedUser.email)
            return res
                .status(400)
                .json({
                    error: "You don't have permission to change password",
                });

        const hashedPassword = await hashPassword(newPassword);

        await User.findByIdAndUpdate(
            id,
            {
                $set: {
                    password: hashedPassword,
                    updatedAt: Date.now(),
                },
            },
            { new: true }
        );

        res.status(200).json({ message: "Your Password has been changed" });
    } catch (ex) {
        res.status(500).json({ error: "Internal server error", ex });
    }
}


module.exports = {
    resetPassword
};
