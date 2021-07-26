import EventEmitter from "events";

import { IPerson } from "./IPerson";
import { Direction, LiftEvent } from "./Enums";
import { ILiftStatus } from "./LiftStatus";


export class Floor{
    
    private _floorNumber: number;
     _residents: IPerson[] = [];
    private static _floorNumberItr: number = 0;
    private _liftStatus: ILiftStatus | null = null;
    private _notificationSent: boolean = false;

    constructor(private _liftQueue: IPerson[], private lift:EventEmitter)
    {
        this._floorNumber = Floor._floorNumberItr++;
        this.lift.on(LiftEvent.LiftStatus, this.liftOperator);
        this.lift.on(`${LiftEvent.OffBoardingOnFloor}_${this._floorNumber}`, this.potentialResidents);
    }

    private liftOperator = (currentLiftStatus: ILiftStatus) =>
    {
        this._liftStatus = currentLiftStatus;
        if(this._liftQueue && this._liftQueue!.length>0)
        {
            this.potentialStop();
            if(!currentLiftStatus.isFull)
                this.potentialPassenger();
        }
    }

    private potentialResidents = (residents:IPerson[]) => {
        if(residents.length>0)
            this._residents.push(...residents);
    }

    private potentialStop = () => 
    {
        if(this._liftStatus != null && (this._liftStatus.direction === Direction.Stop || this._liftStatus.direction === Direction.Up) && this._floorNumber<this._liftQueue[0].destinationFloor)
        {
            this.lift.emit(LiftEvent.PotentialStop,this._floorNumber);
        }
        else if(this._liftStatus != null && (this._liftStatus.direction === Direction.Down) && this._floorNumber>this._liftQueue[0].destinationFloor)
        {
            this.lift.emit(LiftEvent.PotentialStop,this._floorNumber);
        }
    }

    private potentialPassenger = () => {
        if(this._liftStatus != null &&  this._floorNumber === this._liftStatus.currentPosition)
        {
            let persons: IPerson[] | null= null;
            if(this._liftStatus.direction === Direction.Down)
            {
                persons = this._liftQueue.filter(data => data.destinationFloor<this._floorNumber).slice(0,this._liftStatus.noOfPassengersAllowed);
                
            }
            else if(this._liftStatus.direction === Direction.Up)
            {
                persons = this._liftQueue.filter(data => data.destinationFloor>this._floorNumber).slice(0,this._liftStatus.noOfPassengersAllowed);
            }
            if(persons!=null)
            {
                this._liftQueue = this._liftQueue.filter(data => !(persons?.some(x => x === data)));
                this.lift.emit(LiftEvent.OnBoarding,persons);
            }
        }
    }
}
