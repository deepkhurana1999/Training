import { Request, Response } from "express";

import ISupplier from "../models/supplier.model";
import ProductService from "../services/product.service";


export default class ProductSupplierController {

    private _productService: ProductService;

    constructor() {
        this._productService = new ProductService();
    }

    async getProductSuppliers(req: Request, res: Response) {
        try {
            const result:ISupplier[] | undefined = await this._productService.getProductSuppliers(req.params['id']);
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