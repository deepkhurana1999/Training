import {IProduct} from '../products/IProduct';
export interface IPurchaseItem{
    PurchaseID: number,
    PurchaseName: string,
    PurchaseDate: string,
    VendorName: string,
    Items: IProduct[]
}