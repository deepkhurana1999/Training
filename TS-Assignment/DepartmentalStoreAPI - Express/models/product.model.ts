import { ICategory } from "./category.model";
import { IInventory } from "./inventory.model";

export interface IProduct{
    ID?:number,
    Name:string,
    Brand:string,
    Manufacturer:string,
    Code:string,
    AvailableQuantity: number,
    Categories?: ICategory[],
    Inventory?: IInventory
}

