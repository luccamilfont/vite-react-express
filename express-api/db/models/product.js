const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { BaseModel } = require('./basemodel'); 

class Product extends BaseModel {}
Product.init(
  {
    ...Product.fields(),
    price: DataTypes.FLOAT,
    name: DataTypes.STRING,
  },
  BaseModel.options({ sequelize, modelName: 'product', paranoid: true })
);

Product.associate  = function (models) {
   Product.belongsToMany(models.Order, {
     through: 'order_product',
     foreignKey: 'productId',
     otherKey: 'orderId',
   });
};
module.exports = { Product };