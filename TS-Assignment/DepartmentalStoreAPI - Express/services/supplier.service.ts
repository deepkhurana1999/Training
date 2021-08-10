import { inject, injectable } from "inversify";

import TYPES from "../types";
import { ISupplier } from "../models/supplier.model";
import { IAddress } from "../models/address.model";
import { Entities } from "../db/entities.db";
import BaseRepository from "../db/respositories/base.repository";
import ISupplierService from "./contracts/supplier.contract";

@injectable()
export default class SupplierService implements ISupplierService {

    constructor(@inject(TYPES.BaseRepository) private _supplierRepository: BaseRepository) { }

    public async getSuppliers():Promise<ISupplier[] | undefined> {
        try {
            const result: ISupplier[] | undefined = await this._supplierRepository.get(Entities.Supplier);
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
            storedAddress = await this._supplierRepository.add("Address", address);
            let supplier: Partial<ISupplier>;
            
            supplier = {
                name: data['name'],
                phoneNumber: data['phoneNumber'],
                email: data['email'],
                addressId: storedAddress.id
            }
            
            const result:ISupplier = await this._supplierRepository.add(Entities.Supplier, supplier);
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async getSupplierByID(id:string):Promise<ISupplier | undefined> {
        try {
            const result:ISupplier | undefined = await this._supplierRepository.getByID(Entities.Supplier, id);
            return result;
        }
        catch (err) {
            return;
        }
    }

    
    
    public async deleteSupplier(id:string):Promise<void> {
        try {
            await this._supplierRepository.deleteByID(Entities.Supplier, id);
        }
        catch (err) {
            return;
        }
    }
}