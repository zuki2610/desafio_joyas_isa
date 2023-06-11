const superMiddleware = (req, res, next) => {
  const params = req.query;
  if (Object.keys(params).length == 0) {
    res.json({ message: "No viene ningun parametro" });
  } else {
    next();
  }
};

module.exports = { superMiddleware };
