const {
    objectIdValidator,
} = require("../validators/mongooseObjectIdValidator");

async function validateObjectIdMiddleware(req, res, next) {
    const result = objectIdValidator(req.params.id);
    if (!result.isValid)
        return res
            .status(400)
            .json({ message: "Invalid reference", error: result.error });

    next();
}

module.exports = { validateObjectIdMiddleware };
