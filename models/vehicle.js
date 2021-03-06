const Sequelize = require('sequelize');
const db = require('../config/database');

const Vehicle = db.define('vehicle', {
  make: Sequelize.STRING,
  model: Sequelize.STRING
});

module.exports = Vehicle;
