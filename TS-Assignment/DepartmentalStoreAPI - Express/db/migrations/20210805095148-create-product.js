'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('product', {
      id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
      },
      name: {
        type:DataTypes.STRING(50),
        allowNull:false
      },
      brand: {
        type:DataTypes.STRING(100), 
        allowNull:false
      },
      manufacturer: {
        type:DataTypes.STRING(200), 
        allowNull: false
      },
      code: {
        type:DataTypes.STRING,
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
    await queryInterface.dropTable('product');
  }
};