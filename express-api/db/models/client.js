const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { BaseModel } = require('./basemodel'); 

class Client extends BaseModel {}
Client.init(
  {
    ...Client.fields(),
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  },
  BaseModel.options({ sequelize, modelName: 'client', paranoid: true })
);
module.exports = { Client };