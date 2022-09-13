"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = (function () {
    function Member(name, email) {
        this._name = name;
        this._emailAddress = email;
    }
    Member.prototype.getEmailAddress = function () {
        return this._emailAddress;
    };
    Member.prototype.getFullName = function () {
        return this._name;
    };
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.js.map