const { Product } = require('../database/models');

const list = async () => {
  const products = await Product.findAll({ attributes: { exclude: ['id'] } });

  return products;
};

 module.exports = { list };
