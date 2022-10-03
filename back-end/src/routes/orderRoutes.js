const { Router } = require('express');

const { listController, getOrdersByUserController } = require('../controllers/orderController');

const router = Router();

router.get('/', listController);
router.get('/:id', getOrdersByUserController);

module.exports = router; 