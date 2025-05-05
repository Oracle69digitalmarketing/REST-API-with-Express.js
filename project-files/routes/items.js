const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const { validateItem } = require('../middleware/validate');

// Full CRUD operations
router.get('/', itemsController.getItems);
router.get('/:id', itemsController.getItemById);
router.post('/', validateItem, itemsController.createItem);
router.put('/:id', validateItem, itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
