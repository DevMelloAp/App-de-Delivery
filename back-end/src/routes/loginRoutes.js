const { Router } = require('express');

const loginController = require('../controllers/userController');

const router = Router();

router.post('/', (req, res) => loginController(req, res));


module.exports = router;