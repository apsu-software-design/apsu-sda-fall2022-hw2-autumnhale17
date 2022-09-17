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

    public changeName(newName: string) {
        this._name = newName;
    }

    public changeTime(newTime: string) {
        this._time = newTime;
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
