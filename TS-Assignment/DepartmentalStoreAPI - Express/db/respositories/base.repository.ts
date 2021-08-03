import { pool } from "../index";

export default class BaseRepository {

    async get(tableName: string) {
        try {
            try {
                const result = await pool.query(`Select * from "${tableName}"`);
                return result.rows;
            }
            catch (err: any) {
                throw new Error(`DB:RD Failed to fetch data, due to ${err}`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    async getByID(tableName: string, id: number) {
        try {
            try {
                const result = await pool.query(`Select * from "${tableName}" where "ID"=$1`, [id]);
                if (result.rows.length > 0)
                    return result.rows[0];
                return undefined;
            }
            catch (err: any) {
                throw new Error(`DB:RDP Failed to fetch data, due to ${err}`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    async getByColumn(tableName: string, dataArr: any[], columnNames: string[]) {
        try {
            let dataCount = dataArr.length;
            let setArr: string[] = [];
            let valuesMap: string[] = new Array(dataCount).fill(1);
            
            valuesMap = valuesMap.map(data => data = `$${dataArr.length - (--dataCount)}`);
            
            for (let i = 0, j = 0; i < columnNames.length && j < valuesMap.length; i++, j++) {
                setArr.push(`"${columnNames[i]}" = ${valuesMap[j]}`);
            }
            
            const query = `Select * from "${tableName}" where ${setArr.join(' And ')}`;
            const result = await pool.query(query, [...dataArr]);
            return result.rows;
        } catch (error) {
            return [];
        }
    }

    async add(tableName: string, dataArr: any[], columnNames: string[]) {
        try {
            try {
                let dataCount = dataArr.length;
                let valuesMap: string[] = new Array(dataCount).fill(1);

                valuesMap = valuesMap.map(data => data = `$${dataArr.length - (--dataCount)}`);
                
                await pool.query(`Insert into "${tableName}" (${columnNames.map(data => `"${data}"`)}) values(${valuesMap})`, dataArr);

                let result = await this.getByColumn(tableName,dataArr,columnNames);
                return result[0];
            }
            catch (err: any) {
                throw new Error(`DB:AD Failed to add data, due to ${err}`);
            }
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }

    async update(tableName: string, dataArr: any[], columnNames: string[], id: number) {
        try {
            try {
                let dataCount: number = dataArr.length;
                let setArr: string[] = [];
                let valuesMap: string[] = new Array(dataCount).fill(1);

                valuesMap = valuesMap.map(data => data = `$${dataArr.length - (--dataCount)}`);
                for (let i = 0, j = 0; i < columnNames.length && j < valuesMap.length; i++, j++) {
                    setArr.push(`"${columnNames[i]}" = ${valuesMap[j]}`);
                }

                await pool.query(`Update "${tableName}" Set ${setArr.join(',')} where "ID"=${id}`, dataArr);

                const result = this.getByID(tableName,id);
                return result;
            }
            catch (err: any) {
                throw new Error(`DB:UD Failed to fetch data, due to ${err}`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    async deleteByID(tableName: string, id: number) {
        try {
            try {
                await pool.query(`DELETE from "${tableName}" where "ID"=$1`, [id]);
            }
            catch (err: any) {
                throw new Error(`DB:DDP Failed to delete data, due to ${err}`);
            }
        }
        catch (err) {
            throw err;
        }
    }

}