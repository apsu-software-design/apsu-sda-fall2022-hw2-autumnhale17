"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var gathering_1 = require("./gathering");
var Gatherings = (function () {
    function Gatherings() {
        this._gatheringArr = [];
        this._memberList = [];
        this._gatheringListNames = [];
    }
    Gatherings.prototype.addGathering = function (title, location, date) {
        this._gathering = new gathering_1.Gathering(title, location, date);
        this._gatheringArr.push(this._gathering);
    };
    Gatherings.prototype.addMemberToGathering = function (name, gatheringTitle) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == gatheringTitle) {
                this._gatheringArr[i].membersArrGathering.push();
            }
        }
    };
    Gatherings.prototype.getMembers = function (gatheringTitle) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == gatheringTitle) {
                this._memberList.push(this._gatheringArr[i].name);
            }
        }
        return this._memberList;
    };
    Gatherings.prototype.findGatheringNames = function (query) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == query) {
                this._gatheringListNames.push(this._gatheringArr[i].name);
            }
        }
        return this._gatheringListNames;
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map