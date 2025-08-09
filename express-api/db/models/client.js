'use strict';

const BaseModel = require('./basemodel');

module.exports = (sequelize, DataTypes) => {
  class Client extends BaseModel {}

  Client.init(
    {
      ...Client.fields(),
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
    },
    BaseModel.options({ sequelize, modelName: 'Client', paranoid: true })
  );

  return Client;
};