const { Router } = require('express');

const { createSalesController, 
  updateSalesController } = require('../controllers/salesController');

const router = Router();

router.post('/', (req, res) => createSalesController(req, res));
router.put('/', (req, res) => updateSalesController(req, res));


module.exports = router; 