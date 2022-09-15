
import {GatheringManager} from './manager';
import {Members} from './members';
import {Member} from './member';
import {Organizations} from './organizations';

export class Organization {

    private _name : string;
    private _gatheringsArr: string[];

    constructor(title: string) {
        this._name = title;
    }

    public get name() {
        return this._name;
    }

    public addGatheringToOrg(gatheringTitle: string) {
        this._gatheringsArr.push(gatheringTitle);
    }
 
}