import { Router } from "express";

import container from "../config/inversify.config";
import ISupplierService from "../services/contracts/supplier.contract";
import TYPES from "../types";
import SupplierController from "../controllers/supplier.controller";
import SupplierValidator from "../validators/supplier.validators";

export default class SupplierRoutes {

    public static initRoutes(router: Router) {
        
        router.get("/suppliers", async(req, res, next) => {
            await new SupplierController(container.get<ISupplierService>(TYPES.SupplierService)).getSuppliers(req, res);
        });
        
        router.get("/suppliers/:id", async(req, res, next) => {
            await new SupplierController(container.get<ISupplierService>(TYPES.SupplierService)).getSupplierByID(req, res);
        });

        router.post("/suppliers", SupplierValidator.validate, async(req, res, next) => {
            await new SupplierController(container.get<ISupplierService>(TYPES.SupplierService)).saveSupplier(req, res);
        });

        router.delete("/products/:id", async (req, res, next) => {
            await new SupplierController(container.get<ISupplierService>(TYPES.SupplierService)).deleteSupplier(req, res);
        });
    }

}