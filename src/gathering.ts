
import { GatheringManager } from './manager';
import { Members } from './members';
import { Member } from './member';
import { Organizations } from './organizations';
import { Organization } from './organization';

export class Gathering {

    private _location: string;
    private _name: string;
    private _time: string;
    private _membersArrGathering: Array<string>;

    constructor(title: string, location: string, date: string) {
        this._name = title;
        this._location = location;
        this._time = date;
    }

    public getLocation() {
        return this._location;
    }

    public getName() {
        return this._name;
    }

    public getTime() {
        return this._time;
    }

    public addMemberToArr(name: string) {
        this._membersArrGathering.push(name);
    }

    

    

}
