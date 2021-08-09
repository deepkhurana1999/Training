import { Router } from "express";

import container from "../config/inversify.config";
import UUIDValidator from "../validators/uuid.validators";
import { ProductValidator } from "../validators/product.validators";
import { ProductController } from "../controllers/product.controller";
import IProductService from "../services/contracts/product.contract";
import TYPES from "../types";

export default class ProductRoutes {
    
    public static initRoutes(router: Router) {
        
        router.get("/products", async(req, res, next) => {
            await new ProductController(container.get<IProductService>(TYPES.ProductService)).getProducts(req, res);
        });
        
        router.get("/products/:id", UUIDValidator.validate,async(req, res, next) => {
            await new ProductController(container.get<IProductService>(TYPES.ProductService)).getProductByID(req, res);
        });

        router.post("/products", ProductValidator.validate, async (req, res, next) => {
            await new ProductController(container.get<IProductService>(TYPES.ProductService)).saveProduct(req, res);
        });

        router.put("/products/:id", ProductValidator.validate, async (req, res, next) => {
            await new ProductController(container.get<IProductService>(TYPES.ProductService)).updateProduct(req, res);
        });

        // router.delete("/products/:id", async (req, res, next) => {
        //     await new ProductController().deleteProduct(req, res);
        // });
    }

}