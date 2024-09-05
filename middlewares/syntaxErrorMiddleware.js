module.exports =  (err, req, res, next) => {
    if (err instanceof SyntaxError) {
      // Malformed JSON
      return res.status(400).json({ message: 'Invalid JSON format' });
    }
    next();
  }