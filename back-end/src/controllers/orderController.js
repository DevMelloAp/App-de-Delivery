const { list, getOrdersByUserService } = require('../services/orderService');

const listController = async (_req, res) => {
  const orders = await list();

  res.status(201).json(orders);
};

const getOrdersByUserController = async (req, res) => {
  const orders = await getOrdersByUserService(req.query.id);
  
  return res.status(201).json(orders);
};

module.exports = { listController, getOrdersByUserController };
