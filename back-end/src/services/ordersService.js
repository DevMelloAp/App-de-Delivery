const { Sale, User, Product } = require('../database/models');

const getOrdersByUserService = async (idSale) => {
  const orders = await Sale.findByPk(idSale, {
    include: [
      { model: User, as: 'sellerSale' },
      { model: Product, as: 'products' },
    ],
  
  });
  
  return orders;
};

module.exports = { getOrdersByUserService };