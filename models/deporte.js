module.exports = (sequelize, DataTypes) => {
  const Deporte = sequelize.define('Deporte', {
      nombre: DataTypes.STRING,
  });

  // Relación Uno a Muchos con Evento
  Deporte.associate = function (models) {
      Deporte.hasMany(models.Evento, { 
          foreignKey: 'deporteId', 
          onDelete: 'CASCADE', // Borrado en cascada
          hooks: true // Necesario para que Sequelize aplique el borrado en cascada
      });
  };

  return Deporte;
};
