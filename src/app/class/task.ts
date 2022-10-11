import { TaskCallPayloadModel } from "../store/store.models";
import { TimeService } from "../services/time.service";

export class Task {
    constructor(
        {id, name, deadline, completedAt } : TaskCallPayloadModel,
        private time : TimeService
        ){
        this._id = 0; 
        this._name = "";
        this._deadline = "";
        this._completedAt = null;
        this._deadlineTimestamp = 0;
        this._compAtTimestamp = 0;
        this._isLate = false;

        this.id = id;
        this.name = name;
        this.deadline = deadline;
        this.completedAt = completedAt;
    }

    _id : number;
    _name : string;
    _deadline : string;
    _completedAt :string | null;

    _deadlineTimestamp:number ;
    _compAtTimestamp: number;
    _isLate: boolean;

    set id(value : number){
        this._id = value;
    }
    set name(value : string){
        this._name = value;
    }
    set deadline(value : string){
        this._deadline = value;
        this._deadlineTimestamp = this.time.createTimeStamp(value)
        this._isLate = this.time.isLate(this._deadlineTimestamp)
    }
    set completedAt(value : string | null){
        this._completedAt = value ?? null;
        if(value){
            this._compAtTimestamp = this.time.createTimeStamp(value);
        }
    }
    
    get id(){return this._id}
    get name(){return this._name}
    get deadline(){return this._deadline}
    get completedAt(){return this._completedAt}

    get deadlineTimestamp(){return this._deadlineTimestamp}
    get compAtTimestamp(){return this._compAtTimestamp}
    get isLate(){return this._isLate}
}
