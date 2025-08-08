const { sequelize } = require('../db');
const { Order } = require('../models/order');

async function seed() {
  try {
    await sequelize.sync(); // drops & recreates tables, use carefully
    await Order.create({
      paid_at: new Date(),
    });
    console.log('Seeding finished');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();