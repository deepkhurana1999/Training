'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('inventory', {
      id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
      },
      openingStock:{
        type:DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      stockPurchased:{
        type:DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      stockSold:{
        type:DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      productId: {
        type: DataTypes.UUID,
        references:{
          model: 'product',
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
    await queryInterface.dropTable('inventory');
  }
};