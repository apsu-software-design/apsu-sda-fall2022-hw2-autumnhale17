"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var gathering_1 = require("./gathering");
var Gatherings = /** @class */ (function () {
    function Gatherings() {
        this._gatheringArr = [];
    }
    Gatherings.prototype.addGathering = function (title, location, date) {
        // Creating a new gathering
        var gathering = new gathering_1.Gathering(title, location, date);
        // Adding the gathering to the gathering array
        this._gatheringArr.push(gathering);
    };
    Gatherings.prototype.addMemberToGathering = function (name, gatheringTitle) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name.includes(gatheringTitle)) {
                this._gatheringArr[i].membersArrGathering.push(name);
            }
        }
    };
    Gatherings.prototype.getMembers = function (gatheringTitle) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name.includes(gatheringTitle)) {
                return this._gatheringArr[i].membersArrGathering;
            }
        }
    };
    Gatherings.prototype.findGatheringNames = function (query) {
        var gatheringListNames = [];
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name.includes(query)) {
                gatheringListNames.push(this._gatheringArr[i].name);
            }
        }
        return gatheringListNames;
    };
    Gatherings.prototype.modifyGathering = function (title, newTitle, newDate) {
        for (var i = 0; i < this._gatheringArr.length; i++) {
            if (this._gatheringArr[i].name == title) {
                this._gatheringArr[i].changeName(newTitle);
                if (newDate) {
                    this._gatheringArr[i].changeTime(newDate);
                }
            }
        }
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
