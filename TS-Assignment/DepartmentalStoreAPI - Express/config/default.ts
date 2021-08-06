import dotenv from "dotenv";
dotenv.config();

export = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT
}