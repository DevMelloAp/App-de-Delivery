const { Sale, User, Product } = require('../database/models');

const getSellerOrdersService = async (email) => {
  const { id } = await User.findOne({ where: { email } });
  const sellerId = id;
  const orders = await Sale.findAll({ where: { sellerId } });
  return orders;
};

const getSellerOrdersDetailsService = async (id) => {
  const ordersDetails = Sale.findByPk(id, {
    include: [
      { model: Product, as: 'products' },
    ],
  });

  return ordersDetails;
};

module.exports = { getSellerOrdersService, getSellerOrdersDetailsService };