const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/register', userController.create);
router.get('/users', userController.list);

module.exports = router;