"use strict";
//your code goes here!
exports.__esModule = true;
exports.GatheringManager = void 0;
// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var organizations_1 = require("./organizations");
var GatheringManager = /** @class */ (function () {
    function GatheringManager() {
        this.members = new members_1.Members();
        this.gatherings = new gatherings_1.Gatherings();
        this.organizations = new organizations_1.Organizations();
    }
    GatheringManager.prototype.addMember = function (name, email) {
        this.members.addMember(name, email);
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
    };
    GatheringManager.prototype.addOrganization = function (title) {
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        return null;
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        return null;
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        return null;
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        return null;
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
