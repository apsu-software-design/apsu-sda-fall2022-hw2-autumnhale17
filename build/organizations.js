"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var organization_1 = require("./organization");
var Organizations = (function () {
    function Organizations() {
    }
    Organizations.prototype.addOrganization = function (title) {
        this._organization = new organization_1.Organization(title);
        this._organizationArr.push(this._organization);
    };
    Organizations.prototype.findMemberNames = function (query) {
        for (var i = 0; i < this._organizationArr.length; i++) {
            if (this._organization[i] == query) {
                return this._organization[query];
                ;
            }
        }
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map