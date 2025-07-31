const Joi = require('joi');

const itemSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': 'Item name must be a string',
      'string.empty': 'Item name is required',
      'string.min': 'Item name must be at least 2 characters',
      'string.max': 'Item name must be less than 50 characters',
      'any.required': 'Item name is required'
    }),
  quantity: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      'number.base': 'Quantity must be a number',
      'number.min': 'Quantity must be at least 1',
      'any.required': 'Quantity is required'
    }),
  price: Joi.number()
    .min(0)
    .required()
    .messages({
      'number.base': 'Price must be a number',
      'number.min': 'Price must be 0 or more',
      'any.required': 'Price is required'
    })
});

module.exports = { itemSchema };
