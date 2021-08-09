import { ICategory } from "../../models/category.model";

export default interface ICategoryService {

    getCategories():Promise<ICategory[] | undefined>;

    getCategoryByID(id: string): Promise<ICategory | undefined>;

    saveCategory(data: ICategory):Promise<ICategory | undefined>;

    updateCategory(data: ICategory, id: string):Promise<ICategory | undefined>;

    deleteCategory(id: string):Promise<void>;
}