
import ProductRepository from "../db/respositories/product.repository";
import { v4 as uuidv4 } from 'uuid';
import { IProduct }from "../models/product.model";

// import { IInventory } from "../models/previous/inventory.model";
// import ISupplier from "../models/previous/supplier.model";
import { ICategory } from "../models/category.model";
import { Entities } from "../db/entities.db";

export default class ProductService {

    private _productRepository: ProductRepository = new ProductRepository();

    public async get():Promise<IProduct[] | null> {
        try {
            const result: IProduct[] = await this._productRepository.get(Entities.Product);
            return result;
        }
        catch (err) {
            return [];
        }
    }

    public async getByID(id: string):Promise<IProduct | null> {
        try {
            const result: IProduct = await this._productRepository.getByID(Entities.Product, id);
            return result;
            
        }
        catch (err) {
            return null;
        }
    }

    public async save(data: any):Promise<IProduct | null>  {
        try {
            data.id = uuidv4();
            const result: IProduct = await this._productRepository.add(Entities.Product, data);
            return result;
        }
        catch (err) {
            return null;
        }
    }

    public async update(data: Partial<IProduct>,id: string):Promise<IProduct | null>   {
        try {
            const result:IProduct = await this._productRepository.update(Entities.Product, data, id);
            return result;
        }
        catch (err) {
            return null;
        }
    }

    // public async deleteWithAssociation(id: string):Promise<void> {
    //     try {
    //         await this._productRepository.deleteProductAndAssociation(Number.parseInt(id));
    //     }
    //     catch (err) {
    //         throw err;
    //     }
    // }

    // async getProductInventory(id: string): Promise<IInventory[] | undefined>{
    //     try {
    //         const result:IInventory[] | undefined = await this._productRepository.getProductInventory(Number.parseInt(id));
    //         if (!result || result.length === 0)
    //             return;

    //         return result;
    //     }
    //     catch (err) {
    //         return;
    //     }
    // }

    async getProductCategory(id: string): Promise<any[] | undefined>{
        try {
            const result:any[] | undefined = await this._productRepository.getProductCategories(id);

            if (!result || result.length === 0)
                return;
            return result;
        }
        catch (err) {
            return;
        }
    }

    // async getProductSuppliers(id: string): Promise<ISupplier[] | undefined>{
    //     try {
    //         const result:ISupplier[] | undefined = await this._productRepository.getProductSuppliers(Number.parseInt(id));
    //         if (!result)
    //             return;
    //         return result;
    //     }
    //     catch (err) {
    //         return;
    //     }
    // }
}