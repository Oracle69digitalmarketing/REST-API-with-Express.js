// routes/items.js const express = require('express'); const router = express.Router(); const { getItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/itemsController'); const { validateItem } = require('../middleware/validate');

router.get('/', getItems); router.get('/:id', getItemById); router.post('/', validateItem, createItem); router.put('/:id', validateItem, updateItem); router.delete('/:id', deleteItem);

module.exports = router;

// controllers/itemsController.js const { v4: uuidv4 } = require('uuid'); const items = require('../models/itemModel');

exports.getItems = (req, res) => { res.json(items); };

exports.getItemById = (req, res) => { const item = items.find(i => i.id === req.params.id); if (!item) return res.status(404).json({ error: 'Item not found' }); res.json(item); };

exports.createItem = (req, res) => { const { name, description } = req.body; const newItem = { id: uuidv4(), name, description }; items.push(newItem); res.status(201).json(newItem); };

exports.updateItem = (req, res) => { const { name, description } = req.body; const index = items.findIndex(i => i.id === req.params.id); if (index === -1) return res.status(404).json({ error: 'Item not found' }); items[index] = { ...items[index], name, description }; res.json(items[index]); };

exports.deleteItem = (req, res) => { const index = items.findIndex(i => i.id === req.params.id); if (index === -1) return res.status(404).json({ error: 'Item not found' }); items.splice(index, 1); res.status(204).end(); };

// models/itemModel.js const items = []; module.exports = items;

// middleware/validate.js exports.validateItem = (req, res, next) => { const { name, description } = req.body; if (!name || !description) { return res.status(400).json({ error: 'Name and description are required' }); } next(); };

// middleware/errorHandler.js exports.notFound = (req, res, next) => { res.status(404).json({ error: 'Route not found' }); };

exports.errorHandler = (err, req, res, next) => { console.error(err.stack); res.status(500).json({ error: 'Internal Server Error' }); };

