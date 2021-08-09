import { IStaff } from "../../models/staff.model";

export default interface IStaffService {

     getStaff(): Promise<IStaff[] | undefined>;

     getStaffByID(id: string): Promise<IStaff | undefined>;

     deleteStaff(id: string): Promise<void>;
}