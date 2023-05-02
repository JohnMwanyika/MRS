'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
        name: 'Super Admin',
        description: 'This is the overall system admin ,can view all actions int the system',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        description: 'This is a normal system admin can only create and reset emails',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User',
        description: 'This is a normal system user',
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Roles', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};