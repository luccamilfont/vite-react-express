const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class BaseModel extends Model {
  static fields() {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    };
  }

    static options({ sequelize, modelName, paranoid = false }) {
    return {
      sequelize,
      modelName,
      timestamps: true,
      paranoid,
    };
  }
}
module.exports = { BaseModel };