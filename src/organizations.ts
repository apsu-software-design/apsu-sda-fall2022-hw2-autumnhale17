
import {Organization} from './organization'

export class Organizations {

    private _organization: Organization;
    private _organizationArr: Organization[];
    private _memberNames: string[] = [];

    constructor() {

    }

    public addOrganization(title: string) {
        // Creating a new organization
        this._organization = new Organization(title);

        // Adding the organization to the organization array
        this._organizationArr.push(this._organization);
    }

    public addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        for (let i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name == organizationTitle) {
                this._organizationArr[i].addGatheringToOrg(gatheringTitle);
            }
        }
    }

    public findOrganizationNames(query: string) : string[] {
        for (let i = 0; i < this._organizationArr.length; i++) {
            if (this._organizationArr[i].name == query) {
                return this._organizationArr[query];
            }
        }
    }

    
 
}