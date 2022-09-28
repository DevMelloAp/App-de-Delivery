const db = require('../database/models');

const createSalesService = async ({ 
  userId,
  sellerId, 
  totalPrice,
  deliveryAddress, 
  deliveryNumber,
  status }) => {
  await db.Sale.create({ 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status });
};

const updateSalesService = async (id, status) => {
  await db.Sale.update({ status }, { where: { id } });
};

const getOrdersBySellerService = async (email) => {
  const { id } = await db.User.findOne({ where: { email } });
  const sellerId = id;
  const orders = await db.Sale.findAll({ where: { sellerId } });
  return orders;
};

module.exports = { createSalesService, updateSalesService, getOrdersBySellerService };