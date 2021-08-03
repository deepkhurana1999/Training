
import { IProduct } from "../models/product.model";
import ProductRepository from "../db/respositories/product.repository";
import { IInventory } from "../models/inventory.model";
import { ICategory } from "../models/category.model";
import { Entities } from "../db/entities.db";
import ISupplier from "../models/supplier.model";

export default class ProductService {

    private _productRepository: ProductRepository = new ProductRepository();

    public async get():Promise<IProduct[] | undefined> {
        try {
            const result: IProduct[] | undefined = await this._productRepository.get(Entities.Product);
            return result;
        }
        catch (err) {
            return [];
        }
    }

    public async getByID(id: string):Promise<IProduct | undefined> {
        try {
            const result: IProduct | undefined = await this._productRepository.getByID(Entities.Product, Number.parseInt(id));
            if(result)
                return (result);
            return;
        }
        catch (err) {
            return;
        }
    }

    public async save(data: IProduct):Promise<IProduct | undefined>  {
        try {
            const result: IProduct = await this._productRepository.add(Entities.Product, Object.values(data), Object.keys(data));
            if(result)
                return (result);
            return;
        }
        catch (err) {
            return;
        }
    }

    public async update(data: IProduct,id: string):Promise<IProduct | undefined>   {
        try {
            const result:IProduct = await this._productRepository.update(Entities.Product, Object.values(data), Object.keys(data), Number.parseInt(id));
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async deleteWithAssociation(id: string):Promise<void> {
        try {
            await this._productRepository.deleteProductAndAssociation(Number.parseInt(id));
        }
        catch (err) {
            throw err;
        }
    }

    async getProductInventory(id: string): Promise<IInventory[] | undefined>{
        try {
            const result:IInventory[] | undefined = await this._productRepository.getProductInventory(Number.parseInt(id));
            if (!result || result.length === 0)
                return;

            return result;
        }
        catch (err) {
            return;
        }
    }

    async getProductCategory(id: string): Promise<ICategory[] | undefined>{
        try {
            const result:ICategory[] | undefined = await this._productRepository.getProductCategories(Number.parseInt(id));

            if (!result || result.length === 0)
                return;
            return result;
        }
        catch (err) {
            return;
        }
    }

    async getProductSuppliers(id: string): Promise<ISupplier[] | undefined>{
        try {
            const result:ISupplier[] | undefined = await this._productRepository.getProductSuppliers(Number.parseInt(id));
            if (!result)
                return;
            return result;
        }
        catch (err) {
            return;
        }
    }
}