const { postValidator } = require("../validators/postValidator");

async function validatePostMiddleware(req, res, next) {
  const result = postValidator(req.body);
  if (!result.isValid) return res.status(400).json({error: result.error});

  next();
}

module.exports = {
  validatePostMiddleware,
};
