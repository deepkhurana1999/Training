import { Request, Response, NextFunction } from "express";
import Joi from "joi";

import { ICategory } from "../models/category.model";

export class CategoryValidator {

    static async validate(req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            code: Joi.string().required()
        });

        const data: ICategory = req.body;

        const result = schema.validate(data);

        if (result.error) {
            return res.status(400).json(result.error['details']);
        }

        next();
    }
}