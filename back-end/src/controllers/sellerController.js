const { getSellerOrdersService, getSellerOrdersDetailsService} = require('../services/sellerService');
const getSellerOrdesController = async (req, res) => {
  const { email } = req.query;
  const orders = await getSellerOrdersService(email);
  return res.status(200).json(orders);
};


const getSellerOrderDetailsController = async (req, res) => {
  const { id } = req.query;
  const orders = await getSellerOrdersDetailsService(id);
  return res.status(200).json(orders);
};


module.exports = { getSellerOrderDetailsController, getSellerOrdesController}