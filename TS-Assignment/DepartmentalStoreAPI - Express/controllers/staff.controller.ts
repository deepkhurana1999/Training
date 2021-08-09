import { Request, Response } from "express";
import { inject } from "inversify";

import TYPES from "../types";
import {IStaff} from "../models/staff.model";
import IStaffService from "../services/contracts/staff.contract";

export default class StaffController {

    constructor(@inject(TYPES.StaffService) private _staffService: IStaffService) { }

    static errorResponse(res: Response) {
        console.log('Something happened, think about it!');
        return res.status(400).json();
    }

    public async getStaff(req: Request, res: Response) {
        try {
            const result: IStaff[] | undefined = await this._staffService.getStaff();
            if (!result || result.length === 0)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return StaffController.errorResponse(res);
        }
    }

    public async getStaffByID(req: Request, res: Response) {
        try {
            const result = await this._staffService.getStaffByID(req.params['id']);
            if (!result)
                return res.status(204).json();
            return res.json(JSON.stringify(result));
        }
        catch (err) {
            return StaffController.errorResponse(res);
        }
    }

    public async deleteStaff(req: Request, res: Response) {
        try {
            await this._staffService.deleteStaff(req.params['id']);
            return res.status(200).json();
        }
        catch (err) {
            return StaffController.errorResponse(res);
        }
    }
}