'use strict';

const BaseModel = require('./basemodel');

module.exports = (sequelize, DataTypes) => {
  class Order extends BaseModel {
    static associate(models) {
      Order.belongsToMany(models.Product, {
        through: 'OrderProduct',
        foreignKey: 'orderId',
        otherKey: 'productId',
      });
    }
  }

  Order.init(
    {
      ...Order.fields(),
      paid_at: DataTypes.DATE,
    },
    BaseModel.options({ sequelize, modelName: 'Order', paranoid: true })
  );

  return Order;
};