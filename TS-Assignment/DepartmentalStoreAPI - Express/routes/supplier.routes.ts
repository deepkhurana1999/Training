import { Router } from "express";

import SupplierController from "../controllers/supplier.controller";
import SupplierValidator from "../validators/supplier.validtors";

export default class SupplierRoutes {

    public static initRoutes(router: Router) {
        
        router.get("/suppliers", async(req, res, next) => {
            await new SupplierController().getSuppliers(req, res);
        });
        
        router.get("/suppliers/:id", async(req, res, next) => {
            await new SupplierController().getSupplierByID(req, res);
        });

        router.post("/suppliers", SupplierValidator.validate, async(req, res, next) => {
            await new SupplierController().saveSupplier(req, res);
        });

        router.delete("/products/:id", async (req, res, next) => {
            await new SupplierController().deleteSupplier(req, res);
        });
    }

}