
import { Organization } from './organization';
import { Gathering } from './gathering'

export class Gatherings {

    private _gathering: Gathering;
    private _gatheringArr: Array<Gathering>;
    private _organization: Organization;

    constructor() {

    }

    public addGathering(title: string, location: string, date: string) {
        // Creating a new gathering
        this._gathering = new Gathering(title, location, date);

        // Adding the gathering to the gathering array
        this._gatheringArr.push(this._gathering);
    }

    public addMemberToGathering(name: string, gatheringTitle: string) {
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].getName.toString() == gatheringTitle) {
                this._gatheringArr[i].addMemberToArr(name);
            }
        }


    }

}
