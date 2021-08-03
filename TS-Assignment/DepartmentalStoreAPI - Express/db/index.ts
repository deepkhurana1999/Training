import { Pool } from "pg";
import config from "config";

export const pool = new Pool({
    host: config.get<any>('database').host,
    user: config.get<any>('database').username,
    password: config.get<any>('database').password,
    database: config.get<any>('database').databaseName,
    max: 10,
    connectionTimeoutMillis: 10000,
});