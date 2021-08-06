import { Model } from 'sequelize';

export interface IStaff{
  id: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  gender: string,
  email: string,
  addressId:string
}

export default (sequelize: any, DataTypes: any) => {
  class Staff extends Model<IStaff> implements IStaff {
    id!: string;
    firstName!: string;
    lastName!: string;
    phoneNumber!: string;
    gender!: string;
    email!: string;
    addressId!:string;

    static associate(models: any) {
      Staff.hasOne(models.Address, {
        foreignKey: 'addressId'
      });
    }
  };

  Staff.init({
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
    }
  }, {
    sequelize,
    tableName: 'staff',
    modelName: 'Staff',
  });
  return Staff;
};