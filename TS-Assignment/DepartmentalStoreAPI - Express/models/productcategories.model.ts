
import { Model } from 'sequelize';

export interface IProductCategories{
  productId: string,
  categoryId: string
}

 class ProductCategories extends Model<IProductCategories> implements IProductCategories {
  productId!: string;
  categoryId!: string;
  static associate(models: any) {
  }
};

export default (sequelize: any, DataTypes: any) => {
  
  ProductCategories.init({
    productId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references:{
        model: 'product',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references:{
        model: 'category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'productCategories',
    modelName: 'ProductCategories',
  });
  return ProductCategories;
};