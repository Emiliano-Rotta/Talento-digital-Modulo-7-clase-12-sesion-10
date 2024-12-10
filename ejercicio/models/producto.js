const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Categoria = require('./categoria');

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Relación
Categoria.hasMany(Producto, { 
  foreignKey: 'deporteId', 
  onDelete: 'CASCADE', // Borrado en cascada
  hooks: true // Necesario para que Sequelize aplique el borrado en cascada
});
Producto.belongsTo(Categoria);

module.exports = Producto;
