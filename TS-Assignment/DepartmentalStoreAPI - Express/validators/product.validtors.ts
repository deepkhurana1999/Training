import { Request, Response, NextFunction } from "express";
import Joi from "joi";

import { IProduct } from "../models/product.model";

export class ProductValidator{

    static async validate (req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object({
            Name: Joi.string().min(3).required(),
            Brand: Joi.string(),
            Manufacturer: Joi.string(),
            Code: Joi.string().required(),
            AvailableQuantity: Joi.number()
        });
        let data: IProduct = req.body;

        let result = schema.validate(data);

        if (result.error) {
            return res.status(400).json(result.error['details']);
        }

        next();
    }
}