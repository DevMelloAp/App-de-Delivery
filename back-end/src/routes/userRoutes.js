const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.create);
router.post('/admin', userController.createAdmin);
router.post('/remove', userController.removeUser);

module.exports = router;