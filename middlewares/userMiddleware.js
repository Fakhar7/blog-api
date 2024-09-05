const {
    registerUserValidator,
    loginUserValidator,
} = require("../validators/userValidator");

async function registerUserMiddleware(req, res, next) {
    const userData = req.body;

    const result = registerUserValidator(userData);
    if (!result.isValid) return res.status(400).json({message: result.error});

    next();
}

async function loginUserMiddleware(req, res, next) {
    const userData = req.body;

    const result = loginUserValidator(userData);
    if (!result.isValid) return res.status(400).json({message: result.error});

    next();
}

module.exports = {
    loginUserMiddleware,
    registerUserMiddleware,
};
