
import { Gathering } from './gathering'

export class Gatherings {

    private _gatheringArr: Gathering[];

    constructor() {
        this._gatheringArr = [];
    }

    public addGathering(title: string, location: string, date: string) {
        // Creating a new gathering
        let gathering = new Gathering(title, location, date);

        // Adding the gathering to the gathering array
        this._gatheringArr.push(gathering);
    }

    public addMemberToGathering(name: string, gatheringTitle: string) {
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name.includes(gatheringTitle)) {
                this._gatheringArr[i].membersArrGathering.push(name);
            }
        }
    }

    public getMembers(gatheringTitle: string): string[] {
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name.includes(gatheringTitle)) {
                return this._gatheringArr[i].membersArrGathering;
            }
        }
    }

    public findGatheringNames(query: string): string[] {
        let gatheringListNames: string[] = [];
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name.includes(query)) {
                gatheringListNames.push(this._gatheringArr[i].name);
            }
        }
        return gatheringListNames;
    }

    modifyGathering(title: string, newTitle: string, newDate?: string) {
        for (let i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == title) {
                this._gatheringArr[i].changeName(newTitle);
                if (newDate) {
                    this._gatheringArr[i].changeTime(newDate);
                }
            }
        }
    }

}
