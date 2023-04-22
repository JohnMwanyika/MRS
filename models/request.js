'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.Mail, {
          foreignKey: 'mailId'
        }),
        Request.belongsTo(models.RequestType, {
          foreignKey: 'requestType'
        }),
        Request.belongsTo(models.RequestStatus, {
          foreignKey: 'requestStatus'
        })
    }
  }
  Request.init({
    mailId: DataTypes.INTEGER,
    requestType: DataTypes.INTEGER,
    requestStatus: DataTypes.INTEGER,
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};