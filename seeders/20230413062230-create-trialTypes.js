'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TrialTypes', [{
        name: 'Check Email',
        description: 'Trying to check if email exists in the database.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reset Password',
        description: 'Trying to send a password reset request.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Create an email request',
        description: 'Trying to send an email creation request.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TrialTypes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};