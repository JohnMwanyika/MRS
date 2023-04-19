'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('Requests', 'mailId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Mails',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Requests','mailId')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};