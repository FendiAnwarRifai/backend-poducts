'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  item_histories.init({
    item_id: DataTypes.STRING,
    type: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item_histories',
  });
  return item_histories;
};