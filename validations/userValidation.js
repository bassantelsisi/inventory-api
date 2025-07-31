const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.base': 'Name must be a string',
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 3 characters',
      'string.max': 'Name must be less than 30 characters',
      'any.required': 'Name is required'
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'string.email': 'Please enter a valid email',
      'string.empty': 'Email is required',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters',
      'any.required': 'Password is required'
    })
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Please enter a valid email',
      'string.empty': 'Email is required',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters',
      'string.empty': 'Password is required',
      'any.required': 'Password is required'
    })
});

module.exports = { registerSchema, loginSchema };
