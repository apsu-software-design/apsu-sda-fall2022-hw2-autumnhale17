
import { GatheringManager } from './manager';
import { Gatherings } from './gatherings';
import { Organizations } from './organizations';

export class Member {

    private _name: string;
    private _emailAddress: string;

    constructor(name: string, email: string) {
        this._name = name;
        this._emailAddress = email;
    }

    public get emailAddress() {
        return this._emailAddress;
    }

    public get name() {
        return this._name;
    }
}