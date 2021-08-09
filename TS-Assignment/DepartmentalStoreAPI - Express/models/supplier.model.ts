import { Model } from 'sequelize';

export interface ISupplier{
  id:string,
  name: string,
  phoneNumber: string,
  email: string,
  addressId: string
}

export default (sequelize: any, DataTypes: any) => {
  class Supplier extends Model<ISupplier> implements ISupplier {
    id!: string;
    name!: string;
    phoneNumber!: string;
    email!: string;
    addressId!: string;
    
    static associate(models: any) {
      // define association here
      Supplier.hasOne(models.Address, {
        foreignKey: 'addressId'
      });
    }
  };
  Supplier.init({
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
    }
  }, {
    sequelize,
    tableName: 'supplier',
    modelName: 'Supplier',
  });
  return Supplier;
};