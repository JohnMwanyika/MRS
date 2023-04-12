require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'ecomm',
  username: 'mwanyika',
  password: '12345678Admin.'
});

const Trial = sequelize.import('../models/Trial.js');
const TrialStatus = sequelize.import('../models/TrialStatus.js');

// Define associations here
Trial.belongsTo(TrialStatus);
TrialStatus.hasMany(Trial);

module.exports = {
  Trial,
  TrialStatus
};