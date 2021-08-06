import { Router } from "express";
import ProductInventoryController from "../controllers/productInventory.controller";

export default class ProductInventoryRoutes {

    public static initRoutes(router: Router) {

        router.get("/products/:id/inventory", async (req, res, next) => {
            await new ProductInventoryController().getProductInventory(req, res);
        });
    }

}