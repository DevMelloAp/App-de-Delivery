const { createSalesService, updateSalesService } = require('../services/salesService');

const createSalesController = async (req, res) => {
  const { 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status } = req.body;
 
   await createSalesService({ 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status });

  res.status(201).json({ mensage: 'Created' });
};

const updateSalesController = async (req, res) => {
  const { id, status } = req.body;

  await updateSalesService(id, status);

  res.status(201).json({ mensage: 'Updated' });
};

module.exports = { createSalesController, updateSalesController };