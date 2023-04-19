'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  requests.init({
    requestType: DataTypes.STRING,
    requestMail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'requests',
  });
  return requests;
};