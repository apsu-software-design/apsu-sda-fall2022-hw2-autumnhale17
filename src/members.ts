
import { Member } from "./member";

export class Members {

    private _member: Member;
    private _membersArr: Member[];
    private _memberNames: string[] = [];

    constructor() {

    }

    public addMember(name: string, email: string) {
        // Creating a new member 
        this._member = new Member(name, email);

        // Adding the member to the members array
        this._membersArr.push(this._member);
    }

    public findMemberNames(query: string) : string[] {
        for (let i = 0; i < this._membersArr.length; i++) {
            if (this._membersArr[i].name == query) {
                this._memberNames.push(this._membersArr[i].name);
            }
        }
        return this._memberNames;
    }
}
