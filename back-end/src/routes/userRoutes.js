const { Router } = require('express');

const userController = require('../controllers/userController');
const loginController = require('../controllers/userController');

const router = Router();

router.post('/register', userController.create);
router.get('/users', userController.list);
router.post('/', (req, res) => loginController(req, res));


module.exports = router;