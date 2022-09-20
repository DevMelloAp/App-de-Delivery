'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('salesProducts', {
      sale_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: "sales"}
        },
        key: "id"
      },
      product_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: "products"}
        },
        key: "id"
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('salesProducts')
  }
};
