'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RequestStatuses',[
      {
        name: 'Completed',
        description:'This request has been handled by the Admins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pending',
        description:'This request is awayting approval of the Admins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Declined',
        description:'This request has been declined by the Admins, contact them for more information',
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

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RequestStatuses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
