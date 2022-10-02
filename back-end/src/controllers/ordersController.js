const { getOrdersByUserService } = require('../services/ordersService');
  
  const getOrdersByUserController = async (req, res) => {
    const orders = await getOrdersByUserService(req.query.id);
    
    return res.status(201).json(orders);
  };
  
  module.exports = { getOrdersByUserController };