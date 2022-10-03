const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router();

router.get('/', userController.list);
router.post('/remove', userController.removeUser);


module.exports = router;