const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { BaseModel } = require('./basemodel'); 

class Client extends BaseModel {}
Client.init(
  {
    ...BaseModel.fields(),
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  },
  BaseModel.options({ sequelize, modelName: 'client', paranoid: true }) // includes timestamps
);
module.exports = { Client };