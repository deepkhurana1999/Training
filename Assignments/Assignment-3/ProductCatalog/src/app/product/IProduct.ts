import { ICategory } from "../category/ICategory";

export interface IProduct
{
    ID: number,
    Name: string,
    Description: string,
    ShortCode: string,
    Manufacturer: string,
    SellingPrice: number,
    Categories: ICategory[],
}