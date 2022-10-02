const { Router } = require('express');

const { getOrdersByUserController } = require('../controllers/ordersController');

const router = Router();

router.get('/', getOrdersByUserController);

module.exports = router; 