
import { GatheringManager } from './manager';
import { Members } from './members';
import { Member } from './member';
import { Organizations } from './organizations';
import { Organization } from './organization';

export class Gathering {

    private _location: string;
    private _name: string;
    private _time: string;
    private _membersArrGathering: string[] = [];

    constructor(title: string, location: string, date: string) {
        this._name = title;
        this._location = location;
        this._time = date;
    }

    public get location() {
        return this._location;
    }

    public get name() {
        return this._name;
    }

    public get time() {
        return this._time;
    }

    public get membersArrGathering() {
        return this._membersArrGathering;
    }

    public addMemberToArr(name: string) {
        this._membersArrGathering.push(name);
    }

    

    

}
