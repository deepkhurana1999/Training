import { Direction } from "./Enums";

export interface ILiftStatus{
    direction: Direction,
    currentPosition: number,
    isFull: boolean,
    noOfPassengersAllowed: number
}