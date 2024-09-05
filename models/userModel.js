const mongoose = require("mongoose");
const { hashPassword } = require("../services/authService");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            unique: true,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password"))
        this.password = await hashPassword(this.password, 10);
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
