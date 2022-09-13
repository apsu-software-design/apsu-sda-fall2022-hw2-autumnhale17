"use strict";
exports.__esModule = true;
exports.Members = void 0;
var Members = /** @class */ (function () {
    function Members() {
        this.membersMap = new Map();
    }
    Members.prototype.addMember = function (name, email) {
        this.membersMap.set(name, email);
        console.log(this.membersMap.keys());
        console.log(this.membersMap.values());
        this.membersMap.forEach(function (value, key) {
            console.log(value, key);
        });
    };
    return Members;
}());
exports.Members = Members;
