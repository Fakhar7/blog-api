const User = require("../models/userModel");
const { comparePassword } = require("../services/authService");
const { generateToken } = require("../services/tokenService");
const { pick } = require("../services/arrayService");

async function registerUser(req, res) {
  try {
    const { email } = req.body;

    const existedUser = await User.find({ email });
    if (existedUser && existedUser.length > 0)
      return res.status(409).json({ message: "Email already in use" });

    const user = new User(req.body);
    const savedUser = await user.save();

    res
      .status(201)
      .setHeader(
        "x-auth-token",
        generateToken(pick(savedUser, ["_id", "username", "email"]))
      )
      .json({ message: "User created." });
    // res.status(201).json(pick(savedUser, ["_id", "username", "email"]));
  } catch (ex) {
    res.status(500).json({ message: "Internal server error", ex });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const existedUser = await User.find({ email });
    if (!existedUser[0])
      return res.status(400).json({ message: "Invalid credientials" });

    const comparedPassword = await comparePassword(
      password,
      existedUser[0].password
    );

    if (!comparedPassword)
      return res.status(400).json({ message: "Invalid credientials" });

    res
      .status(200)
      .setHeader(
        "x-auth-token",
        generateToken(pick(existedUser[0], ["_id", "username", "email", "isAdmin"]))
      )
      .json({ message: "Welcome back!" });
  } catch (ex) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  loginUser,
  registerUser,
};
