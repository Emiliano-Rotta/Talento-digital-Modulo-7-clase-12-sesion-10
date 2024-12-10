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
Categoria.hasMany(Producto, { onDelete: 'CASCADE' });
Producto.belongsTo(Categoria);

module.exports = Producto;
