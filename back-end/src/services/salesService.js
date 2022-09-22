const db = require('../database/models');

const createSalesService = ({ 
  userId,
  sellerId, 
  totalPrice,
  deliveryAdress, 
  deliveryNumber,
  status }) => {
  db.Sales.create({ 
    userId,
    sellerId, 
    totalPrice,
    deliveryAdress, 
    deliveryNumber,
    status });
};

const updateSalesService = (id, status) => {
  db.Sales.update({ status }, { where: { id } });
};

module.exports = { createSalesService, updateSalesService };