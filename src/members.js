"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var member_1 = require("./member");
var Members = /** @class */ (function () {
    //    private _memberNames: string[] = [];
    function Members() {
        this._membersArr = [];
    }
    Members.prototype.addMember = function (name, email) {
        // Creating a new member 
        var member = new member_1.Member(name, email);
        console.log("Member Array Length Before:" + this._membersArr.length);
        // Adding the member to the members array
        this._membersArr.push(member);
        console.log("Member Array Length After:" + this._membersArr.length);
    };
    Members.prototype.findMemberNames = function (query) {
        var memberNames = [];
        console.log("Find member names length before:" + memberNames.length);
        for (var i = 0; i < this._membersArr.length; i++) {
            if (this._membersArr[i].name.includes(query)) {
                memberNames.push(this._membersArr[i].name);
            }
        }
        console.log("Find member names length upon return:" + memberNames.length);
        return memberNames;
    };
    return Members;
}());
exports.Members = Members;
