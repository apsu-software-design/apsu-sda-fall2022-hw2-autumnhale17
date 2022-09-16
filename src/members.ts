
import { Member } from "./member";

export class Members {

//    private _member: Member;
    private _membersArr: Member[];
//    private _memberNames: string[] = [];

    constructor() {
        this._membersArr = [];
    }

    public addMember(name: string, email: string) {
        
        // Creating a new member 
        let member = new Member(name, email);

        console.log("Member Array Length Before:" + this._membersArr.length);

        // Adding the member to the members array
        this._membersArr.push(member);

        console.log("Member Array Length After:" + this._membersArr.length);
    }

    public findMemberNames(query: string) : string[] {
        let memberNames:string[] = [];
        console.log("Find member names length before:" + memberNames.length);
        for (let i = 0; i < this._membersArr.length; i++) {
            if (this._membersArr[i].name.includes(query)) {
                memberNames.push(this._membersArr[i].name);
            }
        }
        console.log("Find member names length upon return:" + memberNames.length);
        return memberNames;
    }

    /* public findMemberNames(query: string) : string[] {
        for (let m in this._membersArr) {
            if (query == this._membersArr[m].name) {
                this._memberNames.push(this._membersArr[m].name);
            }
        }
        return this._memberNames;
    } */

    /*
    for(let objectNumber in productList){
    var currentId = productList[objectNumber].id;   
    if (theDatabaseList.some(obj => obj.id === currentId)) {
        // Do what you need to do with the matching value here
        objectsFound.push(currentId);
    }
}*/

    /* public findMemberNames(query: string) : string[] {
        this._membersArr.forEach(function(_member) {
            if (_member.name === query) {
                this._memberNames.push(_member.name);
            }
        })
        return this._memberNames;
    } */

}
