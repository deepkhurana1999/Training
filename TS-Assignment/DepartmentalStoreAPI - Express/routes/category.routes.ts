import { Router } from "express";

import { CategoryController } from "../controllers/category.controller";
import { CategoryValidator } from "../validators/category.validators";

export default class CategoryRoutes {

    public static initRoutes(router: Router) {

        router.get("/categories", async (req, res, next) => {
            await new CategoryController().getCategories(req, res);
        });

        router.get("/categories/:id", async (req, res, next) => {
            await new CategoryController().getCategoryByID(req, res);
        });

        router.post("/categories", CategoryValidator.validate, async (req, res, next) => {
            await new CategoryController().saveCategory(req, res);
        });

        router.put("/categories/:id", CategoryValidator.validate, async (req, res, next) => {
            await new CategoryController().updateCategory(req, res);
        });

        router.delete("/categories/:id", async (req, res, next) => {
            await new CategoryController().deleteCategory(req, res);
        });
    }

}