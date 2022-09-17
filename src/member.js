"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = /** @class */ (function () {
    function Member(name, email) {
        this._name = name;
        this._emailAddress = email;
    }
    Object.defineProperty(Member.prototype, "emailAddress", {
        get: function () {
            return this._emailAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Member.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}());
exports.Member = Member;
