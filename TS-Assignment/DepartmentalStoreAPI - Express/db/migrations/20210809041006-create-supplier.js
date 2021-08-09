'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('supplier', {
      id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
      },
      name:{
        type:DataTypes.STRING(100),
        allowNull: false
      },
      email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phoneNumber:{
        type:DataTypes.STRING(15),
        allowNull: false
      },
      addressId:{
        type:DataTypes.UUID,
        allowNull: false,
        references:{
          model: 'address',
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
    await queryInterface.dropTable('supplier');
  }
};