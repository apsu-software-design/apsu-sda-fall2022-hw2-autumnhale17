import { Organization } from './organization'

export class Organizations {

    private _organizationArr: Organization[];;

    constructor() {
        this._organizationArr = [];
    }

    public addOrganization(title: string) {
        // Creating a new organization
        let organization = new Organization(title);

        // Adding the organization to the organization array
        this._organizationArr.push(organization);
    }

    public addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        for (let i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name.includes(organizationTitle)) {
                this._organizationArr[i].addGatheringToOrg(gatheringTitle);
            }
        }
    }

    public findOrganizationNames(query: string): string[] {
        let organizationNames: string[] = [];
        for (let i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name.includes(query)) {
                organizationNames.push(this._organizationArr[i].name);
                //console.log("Org. pushed: " + this._organizationArr[i].name);
            }
        }
        return organizationNames;
    }
}