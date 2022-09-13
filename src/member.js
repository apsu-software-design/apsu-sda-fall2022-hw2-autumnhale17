"use strict";
exports.__esModule = true;
exports.Member = void 0;
var Member = /** @class */ (function () {
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
