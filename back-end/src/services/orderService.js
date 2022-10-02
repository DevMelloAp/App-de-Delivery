const { Sale } = require('../database/models');

const list = async () => {
  const order = await Sale.findAll();

  return order;
};

 module.exports = { list };
