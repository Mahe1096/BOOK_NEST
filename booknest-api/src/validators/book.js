const Joi = require('joi');
exports.bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  publishedDate: Joi.date().optional(),
});