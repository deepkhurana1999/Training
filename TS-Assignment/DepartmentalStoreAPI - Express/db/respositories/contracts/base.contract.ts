
export default interface IBaseRepository {

    get(tableName: string): any;

    getByID(tableName: string, id: any): any;

    add(tableName: string, data: any): any;

    update(tableName: string, data:any, id: any): any;

    deleteByID(tableName: string, id: any): any;

}