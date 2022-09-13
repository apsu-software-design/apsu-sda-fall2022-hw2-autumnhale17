
import { Member } from "./member";

export class Members {

    private _member: Member;
    private _membersArr: Member[];

    constructor() {

    }

    public addMember(name: string, email: string) {
        // Creating a new member 
        this._member = new Member(name, email);

        // Adding the member to the members array
        this._membersArr.push(this._member);
    }

    public getAllMembers() {
        for (this._member of this._membersArr) {
            console.log("Name: " + this._member.name + " " +
                "Email Address: " + this._member.emailAddress);
        }
    }



}
