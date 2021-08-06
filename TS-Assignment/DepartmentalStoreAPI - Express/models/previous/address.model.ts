export default interface IAddress{
    ID: number,
    AddressLine1: string,
    AddressLine2?: string,
    City: string,
    State: string,
    Country: string,
    Pincode: string
}