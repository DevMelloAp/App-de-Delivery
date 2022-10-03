const { Router } = require('express');
const { getSellerOrdesController, getSellerOrderDetailsController } = require('../controllers/sellerController');

const userController = require('../controllers/userController');

const router = Router();

router.get('/', userController.listSellers);
<<<<<<< HEAD
router.get('/orders', getSellerOrdesController);
router.get('/orders/details/:id', getSellerOrderDetailsController)
=======
router.get('/seller', userController.getSeller);
>>>>>>> a7e2f8ee4d3a6ba22f44546bd517e24158c28b28

module.exports = router;