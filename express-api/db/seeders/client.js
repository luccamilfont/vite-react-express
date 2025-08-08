const { sequelize } = require('../db');
const { Client } = require('../models/client');

async function seed() {
  try {
    await sequelize.sync(); // drops & recreates tables, use carefully
    await Client.create({
      name: 'John',
      phone_number: '912341234',
    });
    console.log('Seeding finished');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();