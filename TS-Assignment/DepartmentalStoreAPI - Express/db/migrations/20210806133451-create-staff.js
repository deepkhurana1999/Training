'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('staff', {
      id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
      },
      firstName:{
        type:DataTypes.STRING(100),
        allowNull: false
      },
      lastName:{
        type:DataTypes.STRING(100),
        allowNull: true
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
      gender:{
        type:DataTypes.CHAR(1),
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('staff');
  }
};