
import  { Model } from 'sequelize';

export interface ICategory{
  id: string,
  name: string,
  code: string
}

 class Category extends Model<ICategory> implements ICategory{
  id!: string;
  name!: string;
  code!: string;
  
  static associate(models: any) {
    // define association here
    Category.belongsToMany(models.Product, {
      through: 'ProductCategories',
      foreignKey: 'categoryId'
    });
  }
};


export default (sequelize: any, DataTypes: any ) => {
  Category.init({
    id: {
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING(50),
      allowNull:false
    },
    code: {type:DataTypes.STRING,
      allowNull:false,
      unique:true
    }
  }, {
    sequelize,
    tableName: 'category',
    modelName: 'Category',
  });
  return Category;
};