import { IProduct } from "../../models/product.model";

export default interface IProductService {

     getProducts():Promise<IProduct[] | null>;

     getProductById(id: string):Promise<IProduct | null>;

     saveProduct(data: any):Promise<IProduct | null>;

     updateProduct(data: Partial<IProduct>, id: string):Promise<IProduct | null>;

     getProductInventory(id: string): Promise<any[] | null>;

     getProductCategory(id: string): Promise<any[] | null>;

     getProductSuppliers(id: string): Promise<any[] | null>;
}