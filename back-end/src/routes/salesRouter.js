const { Router } = require('express');

const { createSalesController, 
  updateSalesController, getOrdersBySellerController } = require('../controllers/salesController');

const router = Router();

router.post('/', (req, res) => createSalesController(req, res));
router.put('/', (req, res) => updateSalesController(req, res));
router.get('/orders', (req, res) => getOrdersBySellerController(req, res));

module.exports = router; 