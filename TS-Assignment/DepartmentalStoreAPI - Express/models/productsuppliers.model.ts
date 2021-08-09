import { Model } from 'sequelize';

export interface IProductSuppliers{
  productId: string,
  supplierId: string
}

export default (sequelize: any, DataTypes: any) => {
  class ProductSuppliers extends Model<IProductSuppliers> implements IProductSuppliers {
    productId!: string;
    supplierId!: string;
    
    static associate(models: any) {
      // define association here
    }
  };
  ProductSuppliers.init({
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
    }
  }, {
    sequelize,
    tableName: 'productSuppliers',
    modelName: 'ProductSuppliers',
  });
  return ProductSuppliers;
};