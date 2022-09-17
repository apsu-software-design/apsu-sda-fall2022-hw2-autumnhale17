"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var member_1 = require("./member");
var Members = (function () {
    function Members() {
        this._membersArr = [];
    }
    Members.prototype.addMember = function (name, email) {
        var member = new member_1.Member(name, email);
        this._membersArr.push(member);
    };
    Members.prototype.findMemberNames = function (query) {
        var memberNames = [];
        for (var i = 0; i < this._membersArr.length; i++) {
            if (this._membersArr[i].name.includes(query)) {
                memberNames.push(this._membersArr[i].name);
            }
        }
        return memberNames;
    };
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map