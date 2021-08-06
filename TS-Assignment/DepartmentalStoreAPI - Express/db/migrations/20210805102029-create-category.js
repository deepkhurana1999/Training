'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('category', {
      id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
      },
      name: {
        type:DataTypes.STRING(50),
        allowNull:false
      },
      code: {type:DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('category');
  }
};