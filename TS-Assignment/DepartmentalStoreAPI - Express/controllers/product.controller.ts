import { Request, Response } from "express";

import { IProduct as Product }from "../models/product.model";
import ProductService from "../services/product.service";

export class ProductController {

    private _productService: ProductService = new ProductService();

    static errorResponse(res: Response) {
        console.log('Something happened, think about it!');
        return res.status(500).json();
    }

    public async getProducts(req: Request, res: Response) {
        try {
            const result: Product[] | null = await this._productService.get();
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
            const result:Product | null = await this._productService.getByID(req.params['id']);
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
            const result = await this._productService.save(req.body);
            return res.json(result);
        }
        catch (err) {
            return ProductController.errorResponse(res);
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
            const result = await this._productService.update(req.body,req.params['id']);
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