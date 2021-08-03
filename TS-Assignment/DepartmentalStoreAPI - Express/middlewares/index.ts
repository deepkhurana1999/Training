import cors from "cors";
import express, { Express, Router } from "express";
import helmet from "helmet";

import { init } from "../routes";

export class Middlewares {

    public static init(app: Express) {
        app.use(cors());
        app.use(helmet());
        app.use(express.json());

        
        const router = Router();
        init(router);
        app.use("/api", router);
    }

}
