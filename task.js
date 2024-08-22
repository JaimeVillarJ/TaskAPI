const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Nombre de la tabla de usuarios en la base de datos
      key: 'id',
    },
  },
});

module.exports = Task;
