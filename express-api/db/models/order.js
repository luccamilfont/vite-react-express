const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { BaseModel } = require('./basemodel'); 

class Order extends BaseModel {}
Order.init(
  {
    ...Order.fields(),
    paid_at: DataTypes.DATE,
  },
  BaseModel.options({ sequelize, modelName: 'order', paranoid: true }) 
);

Order.associate  = function (models) {
   Order.belongsToMany(models.Product, {
     through: 'order_product',
     foreignKey: 'orderId',
     otherKey: 'productId',
   });
};
module.exports = { Order };