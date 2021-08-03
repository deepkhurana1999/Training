import { Router } from "express";
import ProductCategoryController from "../controllers/productCategory.controller";

export default class ProductCategoryRoutes {

    public static initRoutes(router: Router) {

        router.get("/products/:id/categories", async (req, res, next) => {
            await new ProductCategoryController().getProductCategory(req, res);
        });
    }

}