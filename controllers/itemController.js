const Item = require('../models/Item');

// Create a new item
const createItem = async (req, res) => {
  try {
    const item = await Item.create({ ...req.body, userId: req.user.id });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error while creating item' });
  }
};

// Get all items for the logged-in user
const getItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching items' });
  }
};

// Get one item by ID
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update item by ID
const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete item by ID
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Export all functions at once
module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
