import TYPES from '../types';
import { inject, injectable } from 'inversify';

import { IStaff } from "../models/staff.model";
import { Entities } from "../db/entities.db";
import BaseRepository from "../db/respositories/base.repository";
import IStaffService from "./contracts/staff.contract";

@injectable()
export default class StaffService implements IStaffService {

    private _staffRepository: BaseRepository;

    constructor(@inject(TYPES.BaseContract) baseRepository: BaseRepository) {
        this._staffRepository = baseRepository;
    }


    public async getStaff(): Promise<IStaff[] | undefined> {
        try {
            const result: IStaff[] | undefined = await this._staffRepository.get(Entities.Staff);
            if (!result || result.length === 0)
                return;
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async getStaffByID(id: string): Promise<IStaff | undefined> {
        try {
            const result = await this._staffRepository.getByID(Entities.Staff, id);
            if (!result || result.length === 0)
                return;
            return result;
        }
        catch (err) {
            return;
        }
    }

    public async deleteStaff(id: string): Promise<void> {
        try {
            await this._staffRepository.deleteByID(Entities.Staff, id);
        }
        catch (err) {
            return;
        }
    }
}