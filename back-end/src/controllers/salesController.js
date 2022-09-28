const { createSalesService,
  updateSalesService, getOrdersBySellerService } = require('../services/salesService');

const createSalesController = async (req, res) => {
  const { 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status } = req.body;
 
   const sale = await createSalesService({ 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status });

    console.log(sale);
  res.status(201).json(sale);

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