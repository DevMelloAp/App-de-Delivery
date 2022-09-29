const sequelize = require("sequelize");

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true
  });

  User.associate = (model) => {
    User.hasMany(model.Sale, { as: 'userSale', foreignKey: 'userId' });
    User.hasMany(model.Sale, { as: 'sellerSale', foreignKey: 'sellerId' });

  }

  return User;
};

module.exports = User;