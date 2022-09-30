const { SalesProduct, Sale, User } = require('../database/models');

const createSalesService = async ({ 
  userId, sellerId, 
  totalPrice, deliveryAddress, 
  deliveryNumber, status,
  productsList,
}) => {
  const sales = await Sale.create({ 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status,
 });
 productsList.forEach(async (p) => SalesProduct
  .create({ saleId: sales.id, productId: p.productId, quantity: p.quantity }));
      
  return sales;
};

const updateSalesService = async (id, status) => {
  await Sale.update({ status }, { where: { id } });
};


module.exports = { createSalesService, updateSalesService, };