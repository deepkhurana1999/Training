import { Request, Response } from "express";
import { inject } from "inversify";
import TYPES from "../types";

import { IProduct as Product }from "../models/product.model";
import IProductService from "../services/contracts/product.contract";

export class ProductController {

    constructor(@inject(TYPES.ProductService) private _productService: IProductService) { }

    static errorResponse(res: Response) {
        console.log('Something happened, think about it!');
        return res.status(500).json();
    }

    public async getProducts(req: Request, res: Response) {
        try {
            const result: Product[] | null = await this._productService.getProducts();
            if (!result || result.length === 0)
                return res.status(400).json({message: 'No Content'});   
            return res.json(result);
        }
        catch (err) {
            return ProductController.errorResponse(res);
        }
    }

    public async getProductByID(req: Request, res: Response) {
        try {
            const result:Product | null = await this._productService.getProductById(req.params['id']);
            if (!result)
                return res.status(204).json();
            return res.json(result);
        }
        catch (err) {
            return ProductController.errorResponse(res);
        }
    }

    public async saveProduct(req: Request, res: Response) {
        try {
            const result = await this._productService.saveProduct(req.body);
            return res.json(result);
        }
        catch (err) {
            return ProductController.errorResponse(res);
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
            const result = await this._productService.updateProduct(req.body,req.params['id']);
            return res.json(result);
        }
        catch (err) {
            return ProductController.errorResponse(res);
        }
    }

    // public async deleteProduct(req: Request, res: Response) {
    //     try {
    //         await this._productService.deleteWithAssociation(req.params['id']);
    //         return res.status(200).json();
    //     }
    //     catch (err) {
    //         return ProductController.errorResponse(res);
    //     }
    // }
}