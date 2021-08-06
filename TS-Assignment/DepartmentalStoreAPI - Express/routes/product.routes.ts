import { Router } from "express";

import { ProductValidator } from "../validators/product.validators";
import UUIDValidator from "../validators/uuid.validators";
import { ProductController } from "../controllers/product.controller";

export default class ProductRoutes {
    
    public static initRoutes(router: Router) {
        
        router.get("/products", async(req, res, next) => {
            await new ProductController().getProducts(req, res);
        });
        
        router.get("/products/:id", UUIDValidator.validate,async(req, res, next) => {
            await new ProductController().getProductByID(req, res);
        });

        router.post("/products", ProductValidator.validate, async (req, res, next) => {
            await new ProductController().saveProduct(req, res);
        });

        router.put("/products/:id", ProductValidator.validate, async (req, res, next) => {
            await new ProductController().updateProduct(req, res);
        });

        // router.delete("/products/:id", async (req, res, next) => {
        //     await new ProductController().deleteProduct(req, res);
        // });
    }

}