import { Request, Response, NextFunction } from "express";
import Joi from "joi";

import { ICategory } from "../models/category.model";

export class CategoryValidator {

    static async validate(req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object({
            Name: Joi.string().min(3).required(),
            Code: Joi.string().required()
        });
        let data: ICategory = req.body;

        let result = schema.validate(data);

        if (result.error) {
            return res.status(400).json(result.error['details']);
        }

        next();
    }
}