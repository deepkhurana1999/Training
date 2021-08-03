import { Request, Response, NextFunction } from "express";
import Joi from "joi";

import ISupplier from "../models/supplier.model";

export default class SupplierValidator{

    static async validate (req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object({
            Name: Joi.string().min(3).required(),
            PhoneNumber: Joi.string().min(10).required(),
            Email: Joi.string(),
            Address: Joi.object({
                    AddressLine1: Joi.string().required(),
                    AddressLine2: Joi.string(),
                    City: Joi.string().required(),
                    State: Joi.string().required(),
                    Country: Joi.string().required(),
                    Pincode: Joi.string().required()
            }).required()
        });
        let data: ISupplier = req.body;

        let result = schema.validate(data);

        if (result.error) {
            return res.status(400).send(result.error['details']);
        }

        next();
    }
}