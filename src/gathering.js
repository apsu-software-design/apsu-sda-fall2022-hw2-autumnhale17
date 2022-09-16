"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gathering = void 0;
var Gathering = /** @class */ (function () {
    function Gathering(title, location, date) {
        this._membersArrGathering = [];
        this._name = title;
        this._location = location;
        this._time = date;
    }
    Object.defineProperty(Gathering.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "time", {
        get: function () {
            return this._time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "membersArrGathering", {
        get: function () {
            return this._membersArrGathering;
        },
        enumerable: false,
        configurable: true
    });
    Gathering.prototype.addMemberToArr = function (name) {
        this._membersArrGathering.push(name);
    };
    return Gathering;
}());
exports.Gathering = Gathering;
