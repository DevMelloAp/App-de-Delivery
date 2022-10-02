const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router();

router.get('/', userController.listSellers);
router.get('/seller', userController.getSeller);

module.exports = router;