'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  items.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    stock_min: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};