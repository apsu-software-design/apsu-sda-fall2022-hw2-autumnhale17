"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var organization_1 = require("./organization");
var Organizations = /** @class */ (function () {
    function Organizations() {
        this._organizationArr = [];
    }
    ;
    Organizations.prototype.addOrganization = function (title) {
        // Creating a new organization
        var organization = new organization_1.Organization(title);
        // Adding the organization to the organization array
        this._organizationArr.push(organization);
    };
    Organizations.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        for (var i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name.includes(organizationTitle)) {
                this._organizationArr[i].addGatheringToOrg(gatheringTitle);
            }
        }
    };
    Organizations.prototype.findOrganizationNames = function (query) {
        var organizationNames = [];
        for (var i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name.includes(query)) {
                organizationNames.push(this._organizationArr[i].name);
                //console.log("Org. pushed: " + this._organizationArr[i].name);
            }
        }
        return organizationNames;
    };
    return Organizations;
}());
exports.Organizations = Organizations;
