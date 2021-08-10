
export default interface IProductRepository {

    getProductInventory(id: string): any;

    getProductCategories(id: any): any;

    getProductSuppliers(id: string): any;

}