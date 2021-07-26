import EventEmitter from 'events';

import { Floor } from "./Floor";
import { Lift } from "./Lift";



class Building {
    private _floors: Floor[];
    private _lift: Lift;
    private _liftEvent = new EventEmitter();
    
    constructor() {
        this._lift = new Lift(2, this._liftEvent);

        this._floors = [
            new Floor([], this._liftEvent),
            new Floor([{ destinationFloor: 0 }], this._liftEvent),
            new Floor([{ destinationFloor: 6 }], this._liftEvent),
            new Floor([{ destinationFloor: 5 }, { destinationFloor: 7 }, { destinationFloor: 5 }], this._liftEvent),
            new Floor([{ destinationFloor: 2 }], this._liftEvent),
            new Floor([{ destinationFloor: 4 }], this._liftEvent),
            new Floor([{ destinationFloor: 3 }], this._liftEvent),
            new Floor([], this._liftEvent),
        ];
        
        this._lift.start(this._floors.length);
        this._floors.forEach((data,idx) => console.log(idx,data._residents));
    }
}

export default Building;