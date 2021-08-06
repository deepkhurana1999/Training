import { Model } from 'sequelize';

export interface IAddress{
  id: string,
  addressLine1: string,
  addressLine2: string,
  city: string,
  state: string,
  country: string,
  pincode: string
}

export default (sequelize: any, DataTypes: any) => {
  class Address extends Model<IAddress> implements IAddress {
    id!: string;
    addressLine1!: string;
    addressLine2!: string;
    city!: string;
    state!: string;
    country!: string;
    pincode!: string;
    
    static associate(models: any) {
      // define association here

    }
  };
  Address.init({
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
    }
  }, {
    sequelize,
    tableName: 'address',
    modelName: 'Address',
  });
  return Address;
};