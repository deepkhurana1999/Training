import { Router } from "express";

import container from "../config/inversify.config";
import TYPES from "../types";
import ICategoryService from "../services/contracts/category.contract";
import { CategoryController } from "../controllers/category.controller";
import { CategoryValidator } from "../validators/category.validators";

export default class CategoryRoutes {

    public static initRoutes(router: Router) {

        router.get("/categories", async (req, res, next) => {
            await new CategoryController(container.get<ICategoryService>(TYPES.CategoryService)).getCategories(req, res);
        });

        router.get("/categories/:id", async (req, res, next) => {
            await new CategoryController(container.get<ICategoryService>(TYPES.CategoryService)).getCategoryByID(req, res);
        });

        router.post("/categories", CategoryValidator.validate, async (req, res, next) => {
            await new CategoryController(container.get<ICategoryService>(TYPES.CategoryService)).saveCategory(req, res);
        });

        router.put("/categories/:id", CategoryValidator.validate, async (req, res, next) => {
            await new CategoryController(container.get<ICategoryService>(TYPES.CategoryService)).updateCategory(req, res);
        });

        router.delete("/categories/:id", async (req, res, next) => {
            await new CategoryController(container.get<ICategoryService>(TYPES.CategoryService)).deleteCategory(req, res);
        });
    }

}