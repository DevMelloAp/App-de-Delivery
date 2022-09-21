const { Router } = require('express');

const { loginController } = require('../controllers/userController');

const router = Router();

router.post('/', (req, res) => loginController(req, res));
// router.get('/', (req, res) => res.status(200).json({ mensage: 'mensagem' }));

module.exports = router;