const { Router } = require('express');
const login = require('../controllers/userController');

const router = Router();

router.get('/', (req, res) => login(req, res));

module.exports = router;