const jwt = require('jsonwebtoken');
const fs = require('fs');
const { createSalesService,
  updateSalesService, getOrdersBySellerService } = require('../services/salesService');
const UserService = require('../services/userServises'); 

const senha = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const createSalesController = async (req, res) => {
  const data = req.body;
 
 const token = req.headers.authorization;

    const validateToken = jwt.verify(token, process.env.JWT_SECRET || senha);

    const { id } = validateToken.id;

    const verifyToken = await UserService.list({ where: { id } });

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

const getOrdersBySellerController = async (req, res) => {
  const { email } = req.query;
  const orders = await getOrdersBySellerService(email);
  return res.status(200).json(orders);
};

module.exports = { createSalesController, updateSalesController, getOrdersBySellerController };
