'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'sales', [
        { 
          id: 1,
          user_id: 1,
          seller_id: 2,
          total_price: 10.00,
          delivery_address: 'rua dos bobos numero 0',
          delivery_number: '1',
          sale_date: new Date(),
          status: 'finished'
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
