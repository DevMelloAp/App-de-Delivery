const sequelize = require("sequelize");

const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    sale_id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    product_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  salesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, { as: 'products', through: salesProduct, foreignKey: 'product_id' });
  
    models.Product.belongsToMany(models.Sale, { as: 'sales', through: salesProduct, foreignKey: 'sale_id' });
  }


  return salesProduct;
};

module.exports = salesProduct;