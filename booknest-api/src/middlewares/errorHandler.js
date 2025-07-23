const logger = require('../utils/logger');
const ApiError = require('../utils/ApiError');

const errorHandler = (err, req, res, next) => {
 
  logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`);

  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  }


  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

 
  res.status(500).json({
    message: 'Internal Server Error',
  });
};

module.exports = errorHandler;
