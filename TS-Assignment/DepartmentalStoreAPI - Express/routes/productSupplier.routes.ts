import { Router } from "express";

import container from "../config/inversify.config";
import IProductService from "../services/contracts/product.contract";
import TYPES from "../types";
import ProductSupplierController from "../controllers/productSupplier.controller";

export default class ProductSupplierRoutes {

    public static initRoutes(router: Router) {

        router.get("/products/:id/suppliers", async (req, res, next) => {
            await new ProductSupplierController(container.get<IProductService>(TYPES.ProductService)).getProductSuppliers(req, res);
        });
    }

}