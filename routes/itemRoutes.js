const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');
const { itemSchema } = require('../validations/itemValidation');

// Validation middleware
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

// Routes
router.route('/')
  .post(validate(itemSchema), createItem)
  .get(getItems);

router.route('/:id')
  .get(getItemById)
  .put(validate(itemSchema), updateItem)
  .delete(deleteItem);

module.exports = router;
