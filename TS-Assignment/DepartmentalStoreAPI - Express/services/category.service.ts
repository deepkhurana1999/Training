import { v4 as uuidv4 } from 'uuid';

import { ICategory } from "../models/category.model";
import { Entities } from "../db/entities.db";
import BaseRepository from "../db/respositories/base.repository";

export default class CategoryService {

    private _categoryService: BaseRepository;

    constructor() {
        this._categoryService = new BaseRepository();
    }

    public async getCategory():Promise<ICategory[] | undefined> {
        try {
            const result: ICategory[] = await this._categoryService.get(Entities.Category);
            return result;
        }
        catch (err) {
            return [];
        }
    }

    public async getCategoryByID(id: string): Promise<ICategory | undefined> {
        try {
            const result: ICategory = await this._categoryService.getByID(Entities.Category, id);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async saveCategory(data: ICategory):Promise<ICategory | undefined> {
        try {
            data.id = uuidv4();
            const result = await this._categoryService.add(Entities.ProductCategories, data);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async updateCategory(data: ICategory, id: string):Promise<ICategory | undefined> {
        try {
            const result = await this._categoryService.update(Entities.Category, data, id);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async deleteCategory(id: string):Promise<void> {
        try {
            await this._categoryService.deleteByID(Entities.Category, id);
        }
        catch (err) {
            return;
        }
    }
}