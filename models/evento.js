
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
      nombre: DataTypes.STRING,
      fecha: DataTypes.DATE,
      deporteId: DataTypes.INTEGER,
  });

  // Relación con Deporte
  Evento.associate = function (models) {
      Evento.belongsTo(models.Deporte, { foreignKey: 'deporteId' });
  };

  return Evento;
};
