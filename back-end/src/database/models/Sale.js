const sequelize = require("sequelize");

const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date:  DataTypes.DATE,
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