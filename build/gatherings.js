"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var gathering_1 = require("./gathering");
var Gatherings = (function () {
    function Gatherings() {
    }
    Gatherings.prototype.addGathering = function (title, location, date) {
        this._gathering = new gathering_1.Gathering(title, location, date);
        this._gatheringArr.push(this._gathering);
    };
    Gatherings.prototype.addMemberToGathering = function (name, gatheringTitle) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == gatheringTitle) {
                this._gatheringArr[i].addMemberToArr(name);
            }
        }
    };
    Gatherings.prototype.getMembers = function (gatheringTitle) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == gatheringTitle) {
                return this._gathering.membersArrGathering;
            }
        }
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map