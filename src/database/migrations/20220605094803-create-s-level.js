'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('s_levels', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('s_levels');
  }
};