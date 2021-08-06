import IStaff from "../models/staff.model";
import { Entities } from "../db/entities.db";
import BaseRepository from "../db/respositories/base.repository";

export default class StaffController {

    private _staffRepository: BaseRepository;

    constructor() {
        this._staffRepository = new BaseRepository();
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
            const result = await this._staffRepository.getByID(Entities.Staff, Number.parseInt(id));
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
            await this._staffRepository.deleteByID(Entities.Staff, Number.parseInt(id));
        }
        catch (err) {
            return;
        }
    }
}