import { Request, Response } from "express";

import { IInventory } from "../models/inventory.model";
import ProductService from "../services/product.service";


export default class ProductInventoryController {

    private _productService: ProductService;

    constructor() {
        this._productService = new ProductService();
    }

    async getProductInventory(req: Request, res: Response) {
        try {
            const result:IInventory[] | undefined = await this._productService.getProductInventory(req.params['id']);
            if(!result)
                return res.status(204).send();
            return res.send(result);
        }
        catch (err) {
            console.log('Something happened, think about it!');
            return res.status(500).send();
        }
    }
}