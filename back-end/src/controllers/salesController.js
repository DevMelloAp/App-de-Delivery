const jwt = require('jsonwebtoken');
const fs = require('fs');
const { createSalesService,
  updateSalesService } = require('../services/salesService');
const { list } = require('../services/userServises');

const createSalesController = async (req, res) => {
  const data = req.body;
 
 const token = req.headers.authorization;
 const senha = fs.readFileSync('jwt.evaluation.key', 'utf-8');

    const validateToken = jwt.verify(token, process.env.JWT_SECRET || senha);

    const { id } = validateToken.id;

    const verifyToken = await list({ where: { id } });

    if (verifyToken) {
      const sale = await createSalesService(data);

      res.status(201).json(sale);  
    }
};

const updateSalesController = async (req, res) => {
  const { id, status } = req.body;

  await updateSalesService(id, status);

  res.status(201).json({ mensage: 'Updated' });
};

module.exports = { createSalesController, updateSalesController };