import { Router } from "express";

import container from "../config/inversify.config";
import IProductService from "../services/contracts/product.contract";
import TYPES from "../types";
import ProductInventoryController from "../controllers/productInventory.controller";

export default class ProductInventoryRoutes {

    public static initRoutes(router: Router) {

        router.get("/products/:id/inventory", async (req, res, next) => {
            await new ProductInventoryController(container.get<IProductService>(TYPES.ProductService)).getProductInventory(req, res);
        });
    }

}