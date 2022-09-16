"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var organization_1 = require("./organization");
var Organizations = (function () {
    function Organizations() {
        this._organizationArr = [];
        this._organizationNames = [];
    }
    Organizations.prototype.addOrganization = function (title) {
        this._organization = new organization_1.Organization(title);
        this._organizationArr.push(this._organization);
    };
    Organizations.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        for (var i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name == organizationTitle) {
                this._organizationArr[i].addGatheringToOrg(gatheringTitle);
            }
        }
    };
    Organizations.prototype.findOrganizationNames = function (query) {
        for (var i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name == query) {
                this._organizationNames.push(this._organizationArr[i].name);
            }
        }
        return this._organizationNames;
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map