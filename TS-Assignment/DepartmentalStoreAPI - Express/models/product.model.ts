import { Model } from 'sequelize';


export interface IProduct{
  id:string,
  name:string,
  brand:string,
  manufacturer:string,
  code:string,
}

class Product extends Model<IProduct> implements IProduct {
  id!: string;
  name!: string;
  brand!: string;
  manufacturer!: string;
  code!: string;

  static associate(models: any) {
    Product.belongsToMany(models.Category, {
      through: 'ProductCategories',
      foreignKey: 'productId'
    });
    Product.hasOne(models.Inventory, {
      foreignKey:'productId'
    });
  }
};

export default (sequelize:any, DataTypes:any) => {  
  Product.init({
    id: {
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING(50),
      allowNull:false
    },
    brand: {type:DataTypes.STRING(100), allowNull:false},
    manufacturer: {type:DataTypes.STRING(200), allowNull: false},
    code: {type:DataTypes.STRING,
      allowNull:false,
      unique:true
    }
  }, {
    sequelize,
    tableName: 'product',
    modelName: 'Product',
  });
  
  return Product;
};
