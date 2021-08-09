import { inject } from "inversify";
import { Request, Response } from "express";

import TYPES from "../types";
import IProductService from "../services/contracts/product.contract";


export default class ProductSupplierController {

    constructor(@inject(TYPES.ProductService) private _productService: IProductService) { }

    async getProductSuppliers(req: Request, res: Response) {
        try {
            const result:any[] | null = await this._productService.getProductSuppliers(req.params['id']);
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