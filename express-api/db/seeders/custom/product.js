const db = require('../../models');
const { sequelize, Product } = db;

async function seed() {
  try {
    await sequelize.sync();
    await Product.create({
      price: 18.99,
      name: 'Milk',
    });
    console.log('Seeding finished');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();