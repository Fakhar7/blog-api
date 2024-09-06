const bcrypt = require("bcrypt");

async function hashPassword(password) {
    const salt = 10;
    return await bcrypt.hash(password, salt);
}

async function comparePassword(plainPassword, hasedPassword) {
    return await bcrypt.compare(plainPassword, hasedPassword);
}

module.exports = {
    hashPassword,
    comparePassword,
};
