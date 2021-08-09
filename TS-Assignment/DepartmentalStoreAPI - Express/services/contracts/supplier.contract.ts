import { ISupplier } from "../../models/supplier.model";

export default interface ISupplierService {

     getSuppliers():Promise<ISupplier[] | undefined>;

     saveSupplier(data: any):Promise<ISupplier | undefined>;

     getSupplierByID(id:string):Promise<ISupplier | undefined>;

     deleteSupplier(id:string):Promise<void>;
}