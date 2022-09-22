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

module.exports = { createSalesService, updateSalesService };