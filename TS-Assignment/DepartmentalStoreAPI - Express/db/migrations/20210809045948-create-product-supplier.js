'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('productSuppliers', {
      productId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'product',
          key: 'id'
        }
      },
      supplierId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'supplier',
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
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('productSuppliers');
  }
};