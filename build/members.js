"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var member_1 = require("./member");
var Members = (function () {
    function Members() {
    }
    Members.prototype.addMember = function (name, email) {
        this._member = new member_1.Member(name, email);
        this._membersArr.push(this._member);
    };
    Members.prototype.getAllMembers = function () {
        for (var _i = 0, _a = this._membersArr; _i < _a.length; _i++) {
            this._member = _a[_i];
            console.log("Name: " + this._member.getFullName + " " +
                "Email Address: " + this._member.getEmailAddress);
        }
    };
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map