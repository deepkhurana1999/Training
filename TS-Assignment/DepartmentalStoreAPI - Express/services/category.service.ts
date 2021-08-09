import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'inversify';

import { ICategory } from "../models/category.model";
import { Entities } from "../db/entities.db";
import BaseRepository from "../db/respositories/base.repository";
import TYPES from "../types";
import ICategoryService from "./contracts/category.contract";

                @injectable()
export default class CategoryService implements ICategoryService {

    private _categoryRepository: BaseRepository;

    constructor(@inject(TYPES.BaseContract) baseRepository: BaseRepository) {
        this._categoryRepository = baseRepository;
    }

    public async getCategories():Promise<ICategory[] | undefined> {
        try {
            const result: ICategory[] = await this._categoryRepository.get(Entities.Category);
            return result;
        }
        catch (err) {
            return [];
        }
    }

    public async getCategoryByID(id: string): Promise<ICategory | undefined> {
        try {
            const result: ICategory = await this._categoryRepository.getByID(Entities.Category, id);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async saveCategory(data: ICategory):Promise<ICategory | undefined> {
        try {
            data.id = uuidv4();
            const result = await this._categoryRepository.add(Entities.ProductCategories, data);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async updateCategory(data: ICategory, id: string):Promise<ICategory | undefined> {
        try {
            const result = await this._categoryRepository.update(Entities.Category, data, id);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async deleteCategory(id: string):Promise<void> {
        try {
            await this._categoryRepository.deleteByID(Entities.Category, id);
        }
        catch (err) {
            return;
        }
    }
}