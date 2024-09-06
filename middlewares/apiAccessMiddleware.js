const {API_ACCESS_PASSWORD} = require("../config/config");

async function apiAccessMiddleware(req, res, next) {
    const x_api_access_pass = req.header("x-api-access-pass");

    if (x_api_access_pass !== API_ACCESS_PASSWORD)
        return res.status(403).json({message: "Access denied"});

    next();
}

module.exports = apiAccessMiddleware;