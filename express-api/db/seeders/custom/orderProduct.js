const db = require('../../models');
const { sequelize, Order, Product } = db;

async function seed() {
  try {
    await sequelize.sync();

    const order = await Order.create({
      paid_at: new Date(),
    });

    const product = await Product.create({
      name: 'Grass',
      price: 13.99,
    });

    await sequelize.query(
      `INSERT INTO OrderProduct ("orderId", "productId", "createdAt", "updatedAt") VALUES (?, ?, datetime('now'), datetime('now'))`,
      {
        replacements: [order.orderId, product.productId],
      }
    );

    console.log('Seeding finished');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();