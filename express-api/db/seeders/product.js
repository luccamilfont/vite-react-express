const { sequelize } = require('../db');
const { Product } = require('../models/product');

async function seed() {
  try {
    await sequelize.sync(); // drops & recreates tables, use carefully
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