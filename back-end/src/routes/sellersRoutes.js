const { Router } = require('express');
const { getSellerOrdesController, getSellerOrderDetailsController } = require('../controllers/sellerController');

const userController = require('../controllers/userController');

const router = Router();

router.get('/', userController.listSellers);
router.get('/orders', getSellerOrdesController);
router.get('/orders/details', getSellerOrderDetailsController)

module.exports = router;