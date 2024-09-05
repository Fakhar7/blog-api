const bcrypt = require("bcrypt");

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function comparePassword(plainPassword, hasedPassword) {
    return await bcrypt.compare(plainPassword, hasedPassword);
}

module.exports = {
    hashPassword,
    comparePassword,
};
