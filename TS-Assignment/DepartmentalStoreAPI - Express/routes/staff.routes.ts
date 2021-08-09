import { Router } from "express";

import container from "../config/inversify.config";
import IStaffService from "../services/contracts/staff.contract";
import TYPES from "../types";
import StaffController from "../controllers/staff.controller";

export default class StaffRoutes {

    public static initRoutes(router: Router) {
        
        router.get("/staff", async(req, res, next) => {
            await new StaffController(container.get<IStaffService>(TYPES.StaffService)).getStaff(req, res);
        });
        
        router.get("/staff/:id", async(req, res, next) => {
            await new StaffController(container.get<IStaffService>(TYPES.StaffService)).getStaffByID(req, res);
        });

        router.delete("/staff/:id", async (req, res, next) => {
            await new StaffController(container.get<IStaffService>(TYPES.StaffService)).deleteStaff(req, res);
        });
    }

}