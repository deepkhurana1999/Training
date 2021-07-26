import EventEmitter from "events";

import { IPerson } from "./IPerson";
import { Direction, LiftEvent } from "./Enums";
import { ILiftStatus } from "./LiftStatus";

export class Lift {

  private _stops: number[] = [];
  private _currentFloor: number = 0;
  private _passengers: IPerson[] = [];
  private _noOfFloors: number = 0;
  private _currentLiftStatus: ILiftStatus;

  
  direction: Direction = Direction.Stop;

  constructor(private _capacity: number, private _event: EventEmitter) {
    this._currentLiftStatus = { noOfPassengersAllowed: this._capacity, direction: this.direction, currentPosition: this._currentFloor, isFull:(this._capacity<=this._passengers.length)};
  }

  passengerOnBoarding = (passengers: IPerson[]) => {
    if(passengers.length>0)
    {
      this._passengers.push(...passengers);
      this._currentLiftStatus = { ...this._currentLiftStatus, 
                                  isFull:(this._capacity<=this._passengers.length),
                                  noOfPassengersAllowed:(this._capacity-this._passengers.length)
                                }
      this.potentialStop(...this._passengers.map(data => data.destinationFloor))
    }
  }

  potentialStop = (...destinationFloor: number[]) => {
    destinationFloor.forEach(floorNumber => {
      if(this._stops.length ===0 || this._stops.every(stop => stop !== floorNumber))
        this._stops.push(floorNumber);
    })
    
  }

  passengerOffBoarding = () => {
    let potentialResidents = this._passengers.filter((data) => data.destinationFloor === this._currentFloor);
    this._event.emit(`${LiftEvent.OffBoardingOnFloor}_${this._currentFloor}`,potentialResidents);
    this._passengers = this._passengers.filter((data) => data.destinationFloor !== this._currentFloor);
    this._currentLiftStatus = { ...this._currentLiftStatus, 
      isFull:(this._capacity<=this._passengers.length),
      noOfPassengersAllowed:(this._capacity-this._passengers.length)
    }
  }

  start(noOfFloors:number) {
    this._noOfFloors = noOfFloors;
    this._event.on(LiftEvent.OnBoarding, this.passengerOnBoarding);
    this._event.on(LiftEvent.PotentialStop, this.potentialStop);
    this.move();
  }

  private move = () => {
    
    do {
      this._event.emit(LiftEvent.LiftStatus, this._currentLiftStatus);
      if (this.direction === Direction.Down || this.direction === Direction.Stop)
        this.moveUp();
      else if (this.direction === Direction.Up)
        this.moveDown();
    } while (this._stops.length>0 || this._passengers.length > 0 || this._currentFloor != 0);
  }

  private moveUp = () => {
    this.direction = Direction.Up;
    this._currentLiftStatus.direction = this.direction;
    let nextStop = this._stops.shift();
    while ((nextStop && this._currentFloor <= nextStop) && this._currentFloor < this._noOfFloors) 
    {
      if(this._currentFloor === nextStop)
      {
        nextStop = this._stops.shift();
      }
      this._currentLiftStatus.currentPosition = this._currentFloor;
      this.broadcastingAndOffBoarding();
      ++this._currentFloor;
    }
    if(this._currentFloor === this._noOfFloors-1)
      this._currentLiftStatus.direction =Direction.Stop;
  }

  private moveDown = () => {
    this.direction = Direction.Down;
    this._currentLiftStatus.direction = this.direction;
    let nextStop = this._stops.pop();
    while ((nextStop && this._currentFloor >= nextStop) && this._currentFloor > 0) {
      if(this._currentFloor === nextStop)
      {
        nextStop = this._stops.pop();
      }
      this._currentLiftStatus.currentPosition = this._currentFloor;
      this.broadcastingAndOffBoarding();
      --this._currentFloor;
    }
    if(nextStop === undefined)
    {
      this._currentFloor = 0;
      this.direction = Direction.Stop;
    }
  }

  private broadcastingAndOffBoarding = () => {
    this._event.emit(LiftEvent.LiftStatus, this._currentLiftStatus);
    if (this._passengers.some((data) => data.destinationFloor === this._currentFloor)) {
      this.passengerOffBoarding();
    }
  }
}