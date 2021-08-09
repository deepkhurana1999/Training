import { v4 as uuidv4 } from 'uuid';
import { injectable, inject } from "inversify";
import "reflect-metadata";

import ProductRepository from "../db/respositories/product.repository";
import { IProduct }from "../models/product.model";
import IProductService from "../services/contracts/product.contract";
import { Entities } from "../db/entities.db";
import TYPES from '../types';

@injectable()
export default class ProductService implements IProductService{

    private _productRepository: ProductRepository;

    constructor(@inject(TYPES.ProductContract) productRepository: ProductRepository)
    {
        this._productRepository = productRepository;
    }

    public async getProducts():Promise<IProduct[] | null> {
        try {
            const result: IProduct[] = await this._productRepository.get(Entities.Product);
            return result;
        }
        catch (err) {
            return [];
        }
    }

    public async getProductById(id: string):Promise<IProduct | null> {
        try {
            const result: IProduct = await this._productRepository.getByID(Entities.Product, id);
            return result;
            
        }
        catch (err) {
            return null;
        }
    }

    public async saveProduct(data: any):Promise<IProduct | null>  {
        try {
            data.id = uuidv4();
            const result: IProduct = await this._productRepository.add(Entities.Product, data);
            return result;
        }
        catch (err) {
            return null;
        }
    }

    public async updateProduct(data: Partial<IProduct>,id: string):Promise<IProduct | null>   {
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

    async getProductInventory(id: string): Promise<any[] | null>{
        try {
            const result:any[] = await this._productRepository.getProductInventory(id);
            
            return result;
        }
        catch (err) {
            return null;
        }
    }

    async getProductCategory(id: string): Promise<any[] | null> {
        try {
            const result:any[] = await this._productRepository.getProductCategories(id);

            return result;
        }
        catch (err) {
            return null;
        }
    }

    async getProductSuppliers(id: string): Promise<any[] | null> {
        try {
            const result:any[] = await this._productRepository.getProductSuppliers(id);
            return result;
        }
        catch (err) {
            return null;
        }
    }
}