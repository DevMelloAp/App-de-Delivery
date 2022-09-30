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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }   
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:  "users", 
          key: "id"
        },        
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2)
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      sale_date: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
        type: Sequelize.DATE
      },  
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },     
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('sales')
  }
};

