//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import { Members } from './members';
import { Gatherings } from './gatherings';
import { Organizations } from './organizations';

export class GatheringManager {

    members: Members;
    gatherings: Gatherings;
    organizations: Organizations;

    constructor() {
        this.members = new Members();
        this.gatherings = new Gatherings();
        this.organizations = new Organizations();
    }

    addMember(name: string, email: string) {
        this.members.addMember(name, email);
    }

    addGathering(title: string, location: string, date: string) {
        this.gatherings.addGathering(title, location, date);
    }

    addOrganization(title: string) {
        this.organizations.addOrganization(title);
    }

    addMemberToGathering(name: string, gatheringTitle: string) {
        this.gatherings.addMemberToGathering(name, gatheringTitle);
    }

    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        this.organizations.addGatheringToOrganization(gatheringTitle, organizationTitle);
    }

    modifyGathering(title: string, newTitle: string, newDate?: string) {
        
    }

    getMembers(gatheringTitle: string): string[] {
        return this.gatherings.getMembers(gatheringTitle);
    }

    findMemberNames(query: string): string[] {
        return this.organizations.findMemberNames(query);
    }

    findGatheringNames(query: string): string[] {
        return null;
    }

    findOrganizationNames(query: string): string[] {
        return null;
    }
}
