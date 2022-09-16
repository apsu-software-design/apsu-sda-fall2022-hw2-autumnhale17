
import { Member } from "./member";

export class Members {

    private _membersArr: Member[];

    constructor() {
        this._membersArr = [];
    }

    public addMember(name: string, email: string) {
        // Creating a new member 
        let member = new Member(name, email);

        //console.log("Member Array Length Before:" + this._membersArr.length);

        // Adding the member to the members array
        this._membersArr.push(member);

        //console.log("Member Array Length After:" + this._membersArr.length);
    }

    public findMemberNames(query: string): string[] {
        let memberNames: string[] = [];
        //console.log("Find member names length before:" + memberNames.length);
        for (let i = 0; i < this._membersArr.length; i++) {
            if (this._membersArr[i].name.includes(query)) {
                memberNames.push(this._membersArr[i].name);
            }
        }
        //console.log("Find member names length upon return:" + memberNames.length);
        return memberNames;
    }
}
