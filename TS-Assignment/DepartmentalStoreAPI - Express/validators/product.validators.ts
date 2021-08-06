import { Request, Response, NextFunction } from "express";
import Joi from "joi";

 import { IProduct } from "../models/product.model";

export class ProductValidator{


    static async validate (req: Request, res: Response, next: NextFunction) {
        
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            brand: Joi.string(),
            manufacturer: Joi.string(),
            code: Joi.string().required(),
            availableQuantity: Joi.number()
        });

        const data: IProduct = req.body;

        let result = schema.validate(data);

        if (result.error) {
            return res.status(400).json(result.error['details']);
        }

        next();
    }
}