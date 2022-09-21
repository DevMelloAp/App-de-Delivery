const sequelize = require("sequelize");

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (model) => {
    User.hasMany(model.Sale, { as: 'userSale', foreignKey: 'user_id' });
    User.hasMany(model.Sale, { as: 'sellerSale', foreignKey: 'seller_id' });

  }

  return User;
};

module.exports = User;