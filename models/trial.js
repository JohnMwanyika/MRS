'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trial.hasMany(models.TrialStatus,{
        foreignKey: "statusId"
      }),
      Trial.belongsTo(models.TrialType,{
        foreignKey:'typeId'
      })

      Trial.belongsTo(models.Department,{
        foreignKey:'departmentId'
      })

      // define association here
    }
  }
  Trial.init({
    credentials: DataTypes.STRING,
    typeId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trial',
  });
  return Trial;
};