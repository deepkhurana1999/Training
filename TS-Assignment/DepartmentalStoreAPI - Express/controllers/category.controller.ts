import { Request, Response } from "express";

import CategoryService from "../services/category.service";
import { ICategory } from "../models/category.model";

export class CategoryController {

    private _categoryService: CategoryService;

    constructor() {
        this._categoryService = new CategoryService();
    }

    static errorResponse(res: Response) {
        console.log('Something happened, think about it!');
        return res.status(400).json();
    }

    public async getCategories(req: Request, res: Response) {
        try {
            const result: ICategory[] | undefined = await this._categoryService.getCategory();
            if (!result || result.length === 0)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return CategoryController.errorResponse(res);
        }
    }

    public async getCategoryByID(req: Request, res: Response) {
        try {
            const result = await this._categoryService.getCategoryByID(req.params['id']);
            if (!result)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return CategoryController.errorResponse(res);
        }
    }

    public async saveCategory(req: Request, res: Response) {
        try {
            const result = await this._categoryService.saveCategory(req.body);
            if (!result)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return CategoryController.errorResponse(res);
        }
    }

    public async updateCategory(req: Request, res: Response) {
        try {
            const result = await this._categoryService.updateCategory(req.body,req.params['id']);
            if (!result)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return CategoryController.errorResponse(res);
        }
    }

    public async deleteCategory(req: Request, res: Response) {
        try {
            await this._categoryService.deleteCategory(req.params['id']);
            return res.status(200).json();
        }
        catch (err) {
            return CategoryController.errorResponse(res);
        }
    }
}