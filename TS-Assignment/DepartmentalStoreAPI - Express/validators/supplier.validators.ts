import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export default class SupplierValidator{

    static async validate (req: Request, res: Response, next: NextFunction) {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            phoneNumber: Joi.string().min(10).required(),
            email: Joi.string(),
            address: Joi.object({
                    addressLine1: Joi.string().required(),
                    addressLine2: Joi.string(),
                    city: Joi.string().required(),
                    state: Joi.string().required(),
                    country: Joi.string().required(),
                    pincode: Joi.string().required()
            }).required()
        });
        let data: any = req.body;

        let result = schema.validate(data);

        if (result.error) {
            return res.status(400).json(result.error['details']);
        }

        next();
    }
}