"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gathering = void 0;
var Gathering = (function () {
    function Gathering(title, location, date) {
        this._name = title;
        this._location = location;
        this._time = date;
    }
    Gathering.prototype.getLocation = function () {
        return this._location;
    };
    Gathering.prototype.getName = function () {
        return this._name;
    };
    Gathering.prototype.getTime = function () {
        return this._time;
    };
    Gathering.prototype.addMemberToArr = function (name) {
        this._membersArrGathering.push(name);
    };
    return Gathering;
}());
exports.Gathering = Gathering;
//# sourceMappingURL=gathering.js.map