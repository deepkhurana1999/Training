import db from "../../models/index";

import BaseRepository from "./base.repository";
import { Entities } from "../entities.db";
import ProductContract from "./contracts/product.contract";

export default class ProductRepository extends BaseRepository implements ProductContract {

    async getProductInventory(id: string) {
        
        try {
            
            const result = await db[Entities.Product].findOne({
                where:{ id: id },
                include: {
                    model: db[Entities.Inventory]
                }
            });

            return result;
        }
        catch (err: any) {
            console.log(new Error(`DB:RD Failed to fetch data, due to ${err}`));
            return;
        }
        
    }

    async getProductCategories(id: any) {
        try {
            
            const result = await db[Entities.Product].findOne({
                where:{ id: id },
                include: {
                    model: db[Entities.Category]
                }
            });

            return result;
        }
        catch (err: any) {
            console.log(new Error(`DB:RD Failed to fetch data, due to ${err}`));
            return;
        }
    }

    async getProductSuppliers(id: string) {
        try {
            try {
                const result = await db[Entities.Product].findOne({
                    where:{ id: id },
                    include: {
                        model: db[Entities.Supplier]
                    }
                });
                return result.rows;
            }
            catch (err: any) {
                throw new Error(`DB:RD1 Failed to fetch data, due to ${err}`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}