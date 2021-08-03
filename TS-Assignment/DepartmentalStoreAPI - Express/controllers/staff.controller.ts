import { Request, Response } from "express";

import IStaff from "../models/staff.model";
import StaffService from "../services/staff.service";

export default class StaffController {

    private _staffService: StaffService;

    constructor() {
        this._staffService = new StaffService();
    }

    static errorResponse(res: Response) {
        console.log('Something happened, think about it!');
        return res.status(400).send();
    }

    public async getStaff(req: Request, res: Response) {
        try {
            const result: IStaff[] | undefined = await this._staffService.getStaff();
            if (!result || result.length === 0)
                return res.status(204).send();
            return res.send(JSON.stringify(result));
        }
        catch (err) {
            return StaffController.errorResponse(res);
        }
    }

    public async getStaffByID(req: Request, res: Response) {
        try {
            const result = await this._staffService.getStaffByID(req.params['id']);
            if (!result)
                return res.status(204).send();
            return res.send(JSON.stringify(result));
        }
        catch (err) {
            return StaffController.errorResponse(res);
        }
    }

    public async deleteStaff(req: Request, res: Response) {
        try {
            await this._staffService.deleteStaff(req.params['id']);
            return res.status(200).send();
        }
        catch (err) {
            return StaffController.errorResponse(res);
        }
    }
}