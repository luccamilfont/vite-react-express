const db = require('../../models');
const { sequelize, Client } = db;

async function seed() {
  try {
    await sequelize.sync();
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