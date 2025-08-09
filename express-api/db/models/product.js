'use strict';

const BaseModel = require('./basemodel');

module.exports = (sequelize, DataTypes) => {
  class Product extends BaseModel {
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through: 'OrderProduct',
        foreignKey: 'productId',
        otherKey: 'orderId',
      });
    }
  }

  Product.init(
    {
      ...Product.fields(),
      price: DataTypes.FLOAT,
      name: DataTypes.STRING,
    },
    BaseModel.options({ sequelize, modelName: 'Product', paranoid: true })
  );

  return Product;
};