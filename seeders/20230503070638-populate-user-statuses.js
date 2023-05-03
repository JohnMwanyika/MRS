'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserStatuses', [{
        name: 'Active',
        description: 'Active users can login and perform actions in the dashboard.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Inactive',
        description: 'Suspended users will be notified that their accounts are suspended upon signing in',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Removed',
        description: 'Removed users will be notified that their accounts are removed upon signing in',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    return queryInterface.bulkDelete('UserStatuses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};