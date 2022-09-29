const { SalesProduct, Sale } = require('../database/models');

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

const getOrdersBySellerService = async (email) => {
  const { id } = await db.User.findOne({ where: { email } });
  const sellerId = id;
  const orders = await db.Sale.findAll({ where: { sellerId }, limit: 10 });
  return orders;
};

module.exports = { createSalesService, updateSalesService, getOrdersBySellerService };