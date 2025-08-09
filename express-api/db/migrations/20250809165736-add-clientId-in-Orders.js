'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Orders', 'clientId', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['clientId'],
      type: 'foreign key',
      name: 'clientId',
      references: {
        table: 'Clients',
        field: 'clientId',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Orders', 'clientId');
    await queryInterface.removeColumn('Orders', 'clientId');
  }
};
