const { Router } = require('express');

const {  list } = require('../controllers/orderController');

const router = Router();

router.get('/', list);


module.exports = router; 