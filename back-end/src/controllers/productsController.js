const ProductService = require('../services/productsService');

const list = async (_req, res) => {
  const products = await ProductService.list();

  res.status(201).json(products);
};

module.exports = { list };
