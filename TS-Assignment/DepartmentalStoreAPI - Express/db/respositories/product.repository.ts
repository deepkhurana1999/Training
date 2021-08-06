import db from "../../models/index";

import BaseRepository from "./base.repository";
import { Entities } from "../entities.db";


export default class ProductRepository extends BaseRepository {

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

    async getProductSuppliers(id: number) {
        try {
            try {
                const result = await db.query(`Select "Supplier".* from "Product" 
                                                JOIN "ProductSupplier" on "ProductSupplier"."ProductID" = "Product"."ID" 
                                                JOIN "Supplier" on "ProductSupplier"."SupplierID" = "Supplier"."ID" 
                                                where "Product"."ID" = $1`, [id]);
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

    async deleteProductAndAssociation(id: number)
    {
        const client = await db.connect();
        try {
            await client.query("BEGIN");
            await client.query(`Delete from "ProductCategory" 
                                where "ProductID"=$1`,[id]);
            await client.query(`Delete from "Inventory" 
                                where "ProductID"=$1`,[id]);
            await client.query(`Delete from "ProductSupplier" 
                                where "ProductID"=$1`,[id]);
            await client.query(`Delete from "Product" 
                                where "ID"=$1`,[id]);
            await client.query('COMMIT');
            return;
        }
        catch (err: any) {
            await client.query('ROLLBACK');
            throw new Error(`DB:DDA Failed to delete data and it's association, due to ${err}`);
        }
        finally{
            if(client)
                client.release();
        }
        
    }
}