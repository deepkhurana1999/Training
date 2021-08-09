import { ISupplier } from "../models/supplier.model";
import { IAddress } from "../models/address.model";
import { Entities } from "../db/entities.db";
import BaseRepository from "../db/respositories/base.repository";

export default class SupplierService {

    private _supplierService: BaseRepository;

    constructor() {
        this._supplierService = new BaseRepository();
    }

    public async getSuppliers():Promise<ISupplier[] | undefined> {
        try {
            const result: ISupplier[] | undefined = await this._supplierService.get(Entities.Supplier);
            if (!result || result.length === 0)
                return;
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async saveSupplier(data: any):Promise<ISupplier | undefined> {
        try {
            let address: Partial<IAddress> = data['address']!;
            let storedAddress: IAddress;
            storedAddress = await this._supplierService.add("Address", address);
            let supplier: Partial<ISupplier>;
            
            supplier = {
                name: data['name'],
                phoneNumber: data['phoneNumber'],
                email: data['email'],
                addressId: storedAddress.id
            }
            
            const result:ISupplier = await this._supplierService.add(Entities.Supplier, supplier);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async getSupplierByID(id:string):Promise<ISupplier | undefined> {
        try {
            const result:ISupplier | undefined = await this._supplierService.getByID(Entities.Supplier, id);
            return result;
        }
        catch (err) {
            return;
        }
    }

    
    
    public async deleteSupplier(id:string):Promise<void> {
        try {
            await this._supplierService.deleteByID(Entities.Supplier, id);
        }
        catch (err) {
            return;
        }
    }
}