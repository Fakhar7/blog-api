require("dotenv").config();

const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const MOGODB_URI = process.env.MONGODB_URI;
const FORGET_PASSWORD_SECRET_KEY = process.env.FORGET_PASSWORD_SECRET_KEY;
const FRONTEND_URL = process.env.FRONTEND_URL;
const EMAIL_API_KEY = process.env.EMAIL_API_KEY;
const MY_EMAIL= process.env.MY_EMAIL;
const API_ACCESS_PASSWORD = process.env.API_ACCESS_PASSWORD;

module.exports = {
    PORT,
    MY_EMAIL,
    MOGODB_URI,
    SECRET_KEY,
    FRONTEND_URL,
    EMAIL_API_KEY,
    FORGET_PASSWORD_SECRET_KEY,
    API_ACCESS_PASSWORD,
}
