import { Request, Response, NextFunction } from "express";
import { version as uuidVersion, validate as uuidValidate } from 'uuid';

export default class UUIDValidator{
    static async validate (req: Request, res: Response, next: NextFunction) {
                
        const uuid: string = req.params['id'];
        if (uuidValidate(uuid) && uuidVersion(uuid) === 4) {
            return res.status(400).json({message: 'Invalid ID.'});
        }

        next();
    }
}