const db = require('../../models');
const { sequelize, Order } = db;

async function seed() {
  try {
    await sequelize.sync();
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