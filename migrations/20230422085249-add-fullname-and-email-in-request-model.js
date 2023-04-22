'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Requests', 'email', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      await queryInterface.addColumn('Requests', 'fullName', {
        type: Sequelize.STRING,
        allowNull: false
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Requests', 'email')
    await queryInterface.removeColumn('Requests', 'fullName')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};