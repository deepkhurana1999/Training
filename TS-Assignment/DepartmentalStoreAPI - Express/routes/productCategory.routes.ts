import { Router } from "express";

import container from "../config/inversify.config";
import IProductService from "../services/contracts/product.contract";
import TYPES from "../types";
import ProductCategoryController from "../controllers/productCategory.controller";

export default class ProductCategoryRoutes {

    public static initRoutes(router: Router) {

        router.get("/products/:id/categories", async (req, res, next) => {
            await new ProductCategoryController(container.get<IProductService>(TYPES.ProductService)).getProductCategory(req, res);
        });
    }

}