import { Router } from "express";

import StaffController from "../controllers/staff.controller";

export default class StaffRoutes {

    public static initRoutes(router: Router) {
        
        router.get("/staff", async(req, res, next) => {
            await new StaffController().getStaff(req, res);
        });
        
        router.get("/staff/:id", async(req, res, next) => {
            await new StaffController().getStaffByID(req, res);
        });

        router.delete("/staff/:id", async (req, res, next) => {
            await new StaffController().deleteStaff(req, res);
        });
    }

}