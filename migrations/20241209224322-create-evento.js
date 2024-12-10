module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Eventos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deporteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Deportes', // Nombre de la tabla en la base de datos
          key: 'id'
        },
        onDelete: 'CASCADE', // Borrado en cascada
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Eventos');
  }
};
