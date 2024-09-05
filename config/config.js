require("dotenv").config();

const MOGODB_URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.SECRET_KEY;
const PORT = process.env.PORT;

module.exports = {
    MOGODB_URI,
    SECRET_KEY,
    PORT
}
