
import {Organization} from './organization'

export class Organizations {

    private _organization: Organization;
    private _organizationArr: Array<Organization>;

    constructor() {

    }

    public addOrganization(title: string) {
        // Creating a new organization
        this._organization = new Organization(title);

        // Adding the organization to the organization array
        this._organizationArr.push(this._organization);
    }

    findMemberNames(query: string) : string[] {
        for (let i = 0; i < this._organizationArr.length; i++) {
            if (this._organization[i] == query) {
                return this._organization[query];;
            }
        }
    }

    
 
}