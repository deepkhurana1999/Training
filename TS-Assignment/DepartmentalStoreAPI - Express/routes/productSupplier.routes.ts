import { Router } from "express";
import ProductSupplierController from "../controllers/productSupplier.controller";

export default class ProductSupplierRoutes {

    public static initRoutes(router: Router) {

        router.get("/products/:id/suppliers", async (req, res, next) => {
            await new ProductSupplierController().getProductSuppliers(req, res);
        });
    }

}