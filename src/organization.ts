export class Organization {

    private _name: string;
    private _gatheringsArr: string[] = [];

    constructor(title: string) {
        this._name = title;
    }

    public get name() {
        return this._name;
    }

    public get gatheringArr() {
        return this._gatheringsArr;
    }

    public addGatheringToOrg(gatheringTitle: string) {
        this._gatheringsArr.push(gatheringTitle);
    }

}