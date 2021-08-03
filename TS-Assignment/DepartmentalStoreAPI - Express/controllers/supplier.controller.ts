import { Request, Response } from "express";

import ISupplier from "../models/supplier.model";
import SupplierService from "../services/supplier.service";

export default class SupplierController {

    private _supplierService: SupplierService;

    constructor() {
        this._supplierService = new SupplierService();
    }

    static errorResponse(res: Response) {
        console.log('Something happened, think about it!');
        return res.status(500).json();
    }

    public async getSuppliers(req: Request, res: Response) {
        try {
            const result: ISupplier[] | undefined = await this._supplierService.getSuppliers();
            if (!result || result.length === 0)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return SupplierController.errorResponse(res);
        }
    }

    public async saveSupplier(req: Request, res: Response) {
        try {
            let result: ISupplier | undefined = await this._supplierService.saveSupplier(req.body);

            if (!result)
                return res.status(500).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return SupplierController.errorResponse(res);
        }
    }

    public async getSupplierByID(req: Request, res: Response) {
        try {
            const result: ISupplier | undefined = await this._supplierService.getSupplierByID(req.params['id']);
            if (!result)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return SupplierController.errorResponse(res);
        }
    }



    public async deleteSupplier(req: Request, res: Response) {
        try {
            await this._supplierService.deleteSupplier(req.params['id']);
            return res.status(200).json();
        }
        catch (err) {
            return SupplierController.errorResponse(res);
        }
    }
}