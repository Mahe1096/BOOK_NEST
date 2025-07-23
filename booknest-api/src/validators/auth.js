const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email({ tlds: { allow: false } }).optional(),

  password: Joi.string()
    .min(6)
    .max(128)
    .pattern(new RegExp('^[a-zA-Z0-9@#$%^&+=!]*$'))
    .required(),

  role: Joi.string().valid('user', 'admin').optional()
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = {
  signupSchema,
  loginSchema
};
