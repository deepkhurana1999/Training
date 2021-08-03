import IAddress from "./address.model";

export default interface ISupplier{
    ID?:number,
    Name: string,
    PhoneNumber: string,
    Email: string,
    AddressID?: number,
    Address?: IAddress
}