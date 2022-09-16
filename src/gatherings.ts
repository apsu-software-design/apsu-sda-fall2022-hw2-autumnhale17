
import { Organization } from './organization';
import { Gathering } from './gathering'

export class Gatherings {

    private _gathering: Gathering;
    private _gatheringArr: Gathering[] = [];
    private _organization: Organization;
    private _memberList: string[] = [];
    private _gatheringListNames: string[] = [];

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
            if (this._gatheringArr[i].name == gatheringTitle) {
                this._gatheringArr[i].membersArrGathering.push();
            }
        }
    }

    public getMembers(gatheringTitle: string): string[] {
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == gatheringTitle) {8
                
                this._memberList.push(this._gatheringArr[i].name);
            }
        }
        return this._memberList;
    }

    public findGatheringNames(query: string) : string[] {
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == query) {
                this._gatheringListNames.push(this._gatheringArr[i].name);
            }
        }
        return this._gatheringListNames;
    }

}
