import { pool } from "..";

import BaseRepository from "./base.repository";

export default class ProductRepository extends BaseRepository {
    async getProductInventory(id: number) {
        try {
            try {
                const result = await pool.query(`Select "Inventory".* from "Product" 
                                                JOIN "Inventory" on "Inventory"."ProductID" = "Product"."ID" 
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

    async getProductCategories(id: number) {
        try {
            try {
                const result = await pool.query(`Select "Category".* from "Product" 
                                                JOIN "ProductCategory" on "ProductCategory"."ProductID" = "Product"."ID"
                                                JOIN "Category" on "Category"."ID" = "ProductCategory"."CategoryID"
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

    async getProductSuppliers(id: number) {
        try {
            try {
                const result = await pool.query(`Select "Supplier".* from "Product" 
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
        const client = await pool.connect();
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