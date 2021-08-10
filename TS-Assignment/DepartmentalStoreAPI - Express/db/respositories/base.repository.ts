import { injectable } from "inversify";
import "reflect-metadata";

import db from "../../models/index";
import IBaseRepository from "./contracts/base.contract";

               @injectable()
export default class BaseRepository implements IBaseRepository {

    async get(tableName: string) {
        try {
            const result = await db[tableName].findAll();
            return result;
        }
        catch (err) {
            console.log(new Error(`DB:RD Failed to fetch data, due to ${err}`));
        }
    }

    async getByID(tableName: string, id: any) {
        try {
            const result = await db[tableName].findByPk(id);
            return result;
        }
        catch (err: any) {
            console.error(new Error(`DB:RDP Failed to fetch data, due to ${err}`));
        }
    }

    
    async add(tableName: string, data: any) 
    {
        try 
        {
            const result = await db[tableName].create(data);
            return result;
        }
        catch (err: any) 
        {
            console.error(new Error(`DB:AD Failed to add data, due to ${err}`));
            return;
        }
    }

    async update(tableName: string, data:any, id: any) {
        try {
            const result = await db[tableName].update(data, {
                where: {
                  id: id
                }
              });
            return result;
        }
        catch (err: any) {
            console.error(new Error(`DB:UD Failed to fetch data, due to ${err}`));
            return;
        }
    }

    async deleteByID(tableName: string, id: any) {
        try {
            const result = await this.getByID(tableName,id);
            await result.destroy();
        }
        catch (err) {
            console.error(Error(`DB:DDP Failed to delete data, due to ${err}`));
        }
    }

}