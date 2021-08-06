import  { Model } from 'sequelize';

export interface IInventory{
  id: string,
  openingStock: number,
  stockPurchased: number,
  stockSold: number,
  productId: string
}

export default (sequelize: any, DataTypes: any) => {
  class Inventory extends Model<IInventory> implements IInventory {
    id!: string;
    openingStock!: number;
    stockPurchased!: number;
    stockSold!: number;
    productId!: string;
    
  static associate(models: any) {
      Inventory.belongsTo(models.Product,{
        foreignKey: 'productId'
      });
    }
  };
  Inventory.init({
    id: {
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey:true
    },
    openingStock:{
      type:DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false
    },
    stockPurchased:{
      type:DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false
    },
    stockSold:{
      type:DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false
    },
    productId: {
      type: DataTypes.UUID,
      references:{
        model: 'product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'inventory',
    modelName: 'Inventory',
  });
  
  return Inventory;
};