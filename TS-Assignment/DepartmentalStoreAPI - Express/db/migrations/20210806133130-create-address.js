
'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('address', {
      id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
      },
      addressLine1:{
        type:DataTypes.STRING,
        allowNull: false
      },
      addressLine2:{
        type:DataTypes.STRING,
        allowNull: true
      },
      city:{
        type:DataTypes.STRING,
        allowNull: false
      },
      state:{
        type:DataTypes.STRING,
        allowNull: false
      },
      country:{
        type:DataTypes.STRING,
        allowNull: false
      },
      pincode:{
        type:DataTypes.STRING(10),
        allowNull: false
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
    await queryInterface.dropTable('address');
  }
};