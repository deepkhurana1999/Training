'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('productCategories', {
      
      productId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references:{
          model: {
            tableName:'product'
          },
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references:{
          model: {
            tableName: 'category'
          },
          key: 'id'
        }
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
    await queryInterface.dropTable('productCategories');
  }
};