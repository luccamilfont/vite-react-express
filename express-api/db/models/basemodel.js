'use strict';

const { Model, DataTypes } = require('sequelize');

class BaseModel extends Model {
  static fields() {
    const modelName = this.name;
    const modelId = `${modelName.charAt(0).toLowerCase()}${modelName.slice(1)}Id`;

    return {
      [modelId]: {
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

module.exports = BaseModel;