import { Request, Response } from "express";

import { ICategory } from "../models/category.model";
import ProductService from "../services/product.service";


export default class ProductCategoryController {

    private _productService: ProductService;

    constructor() {
        this._productService = new ProductService();
    }

    async getProductCategory(req: Request, res: Response) {
        try {
            const result:any[] | undefined = await this._productService.getProductCategory(req.params['id']);
            if(!result)
                return res.status(204).json();
            return res.json(result);
        }
        catch (err) {
            console.log('Something happened, think about it!');
            return res.status(500).json();
        }
    }
}