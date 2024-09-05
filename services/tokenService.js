const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

function decodeToken(token) {
  return jwt.decode(token);
}

module.exports = {
  generateToken,
  decodeToken,
};
