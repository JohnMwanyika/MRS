'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Requests', 'requestType', {
        type: Sequelize.INTEGER,
        references: {
          model: 'RequestTypes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
      await queryInterface.addColumn('Requests', 'requestStatus', {
        type: Sequelize.INTEGER,
        references: {
          model: 'RequestStatuses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('requestType');
    await queryInterface.removeColumn('requestStatus');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};