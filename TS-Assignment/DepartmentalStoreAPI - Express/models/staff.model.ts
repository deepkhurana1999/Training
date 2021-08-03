import IAddress from "./address.model";
import { IDesignation } from "./designation.model";

export default interface IStaff{
    ID:number,
    FirstName: string,
    LastName: string,
    PhoneNumber: string,
    Gender: string,
    Email: string,
    Address?: IAddress,
    Designation?: IDesignation
}