'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrialStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TrialStatus.belongsTo(models.Trial,{
        foreignKey:'statusId'
      })
      // define association here
    }
  }
  TrialStatus.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TrialStatus',
  });
  return TrialStatus;
};