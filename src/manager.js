"use strict";
//your code goes here!
Object.defineProperty(exports, "__esModule", { value: true });
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
        // console.log("Adding member... calling function...");
        this.members.addMember(name, email);
        // console.log("Member added...");
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
        this.gatherings.addGathering(title, location, date);
    };
    GatheringManager.prototype.addOrganization = function (title) {
        this.organizations.addOrganization(title);
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
        this.gatherings.addMemberToGathering(name, gatheringTitle);
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        this.organizations.addGatheringToOrganization(gatheringTitle, organizationTitle);
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
        this.gatherings.modifyGathering(title, newTitle, newDate);
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        return this.gatherings.getMembers(gatheringTitle);
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        return this.members.findMemberNames(query);
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        return this.gatherings.findGatheringNames(query);
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        return this.organizations.findOrganizationNames(query);
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
