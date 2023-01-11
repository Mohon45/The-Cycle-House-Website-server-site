const errorHandler = (error, req, res, next) => {
  res.status(500).send({
    success: false,
    message: "Internal server error.",
    error: error,
  });
};

module.exports = errorHandler;
