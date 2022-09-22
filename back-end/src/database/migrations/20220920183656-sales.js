'use strict';

const { sequelize } = require("../models");


module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }   
      },
      seller_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model:  "users", 
          key: "id"
        },        
      },
      total_price: {
        allowNull: true,
        type: Sequelize.DECIMAL(9,2)
      },
      delivery_address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      delivery_number: {
        allowNull: true,
        type: Sequelize.STRING
      }, 
      sale_date: {
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
        type: Sequelize.DATE
      },  
      status: {
        allowNull: true,
        type: Sequelize.STRING
      },     
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('sales')
  }
};

