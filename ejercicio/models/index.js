const { Sequelize } = require('sequelize');
const config = require('../config/config.json').development;

// Crear instancia de Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);

// Exportar la instancia
module.exports = sequelize;
