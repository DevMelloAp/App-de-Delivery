const {salesProduct, Sale } = require('../database/models');

const createSalesService = async ({ 
  userId,
  sellerId, 
  totalPrice,
  deliveryAddress, 
  deliveryNumber,
  status,
  productsList
  }) => {
  const sales = await Sale.create({ 
    userId,
    sellerId, 
    totalPrice,
    deliveryAddress, 
    deliveryNumber,
    status,
 });
  const productListWithId = productsList
  .map((product) => ({sale_id: sales.null, product_id: product.productId, quantity: product.quantity}) )
  
  console.log('PRIMEIRO============', productListWithId);

  const createSalesProduct = await Promise.all(productListWithId.map(async(product) => await salesProduct.create(product)));
  console.log('================', createSalesProduct);
     
    return { ...sales.dataValues, id: sales.null }
};





const updateSalesService = async (id, status) => {
  await db.Sale.update({ status }, { where: { id } });
};

module.exports = { createSalesService, updateSalesService };