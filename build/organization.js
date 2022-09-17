"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var Organization = (function () {
    function Organization(title) {
        this._gatheringsArr = [];
        this._name = title;
    }
    Object.defineProperty(Organization.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "gatheringArr", {
        get: function () {
            return this._gatheringsArr;
        },
        enumerable: false,
        configurable: true
    });
    Organization.prototype.addGatheringToOrg = function (gatheringTitle) {
        this._gatheringsArr.push(gatheringTitle);
    };
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map