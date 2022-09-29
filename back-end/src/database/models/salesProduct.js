const sequelize = require("sequelize");

const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  salesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, { 
      as: 'products', through: salesProduct, foreignKey: 'saleId', otherKey: 'productId' });
  
    models.Product.belongsToMany(models.Sale, { 
      as: 'sales', through: salesProduct, foreignKey: 'productId',  otherKey: 'saleId' });
  }


  return salesProduct;
};

module.exports = salesProduct;