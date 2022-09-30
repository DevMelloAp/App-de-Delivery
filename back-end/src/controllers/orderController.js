const OrderService = require('../services/orderService');

const list = async (_req, res) => {
  const orders = await OrderService.list();

  res.status(201).json(orders);
};

module.exports = { list };
