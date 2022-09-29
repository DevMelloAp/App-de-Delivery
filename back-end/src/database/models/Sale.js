const sequelize = require("sequelize");

const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate:  DataTypes.DATE,
    status:  DataTypes.STRING,
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (model) => {
    Sale.belongsTo(model.User, { as: 'userSale', foreignKey: 'userId' });
    Sale.belongsTo(model.User, { as: 'sellerSale', foreignKey: 'sellerId' });
  }

  return Sale;
};

module.exports = Sale;