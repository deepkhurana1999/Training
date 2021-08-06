import IAddress from "../models/previous/address.model";
import ISupplier from "../models/previous/supplier.model";
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

    public async saveSupplier(data: ISupplier):Promise<ISupplier | undefined> {
        try {
            let address: IAddress = data['Address']!;
            let storedAddress: IAddress;
            storedAddress = await this._supplierService.add("Address", Object.values(address), Object.keys(address));
            let supplier: ISupplier;
            
            supplier = {
                Name: data['Name'],
                PhoneNumber: data['PhoneNumber'],
                Email: data['Email'],
                AddressID: storedAddress.ID
            }
            
            const result:ISupplier = await this._supplierService.add(Entities.Supplier, Object.values(supplier), Object.keys(supplier));
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async getSupplierByID(id:string):Promise<ISupplier | undefined> {
        try {
            const result:ISupplier | undefined = await this._supplierService.getByID(Entities.Supplier, Number.parseInt(id));
            return result;
        }
        catch (err) {
            return;
        }
    }

    
    
    public async deleteSupplier(id:string):Promise<void> {
        try {
            await this._supplierService.deleteByID(Entities.Supplier, Number.parseInt(id));
        }
        catch (err) {
            return;
        }
    }
}