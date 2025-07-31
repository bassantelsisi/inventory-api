const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { registerSchema, loginSchema } = require('../validations/userValidation');

// Generic validation middleware
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

module.exports = router;
