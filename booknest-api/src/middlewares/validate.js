const ApiError = require('../utils/ApiError');

module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false }); // validate all fields
  if (error) {
    const messages = error.details.map((detail) => detail.message).join(', ');
    return next(new ApiError(400, messages));
  }
  next();
};
