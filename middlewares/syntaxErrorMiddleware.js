module.exports =  (err, req, res, next) => {
    if (err instanceof SyntaxError) {
      // Malformed JSON
      return res.status(422).json({ error: 'Invalid JSON format' });
    }
    next();
  }