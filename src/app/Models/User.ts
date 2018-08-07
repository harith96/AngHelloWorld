import { Address } from "./Address";

export interface User{
    firstName: String;
    lastName: String;
    age: number;
    address: Address;
    isDeleted: boolean;
}