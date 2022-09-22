const sequelize = require("sequelize");

const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
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
    Sale.belongsTo(model.User, { as: 'userSale', foreignKey: 'user_id' });
    Sale.belongsTo(model.User, { as: 'sellerSale', foreignKey: 'seller_id' });


  }

  return Sale;
};

module.exports = Sale;