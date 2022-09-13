
import {GatheringManager} from './manager';
import {Members} from './members';
import {Member} from './member';
import {Organizations} from './organizations';

export class Organization {

    private _name : string;
    private _membersArrOrganization: Array<String>;


    constructor(title: string) {
        this._name = title;
    }

    public getName() {
        return this._name;
    }




 
}