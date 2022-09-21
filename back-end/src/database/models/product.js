const sequelize = require("sequelize");

const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });


  return Product;
};

module.exports = Product;