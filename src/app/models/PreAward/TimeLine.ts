 export class TimeLine {
     id: number;
    //  pI: any; // User
    //  coPi: any[]; // Users
     proposal: string;
     fundingAgency: string;
     shippingDeadline: Date;
     uASDate: Date;
     sponsorDueDate: Date;
     finalSign: Date;
     shippingDate: Date;
     piDueDates: any[]; // <string,Date>
     orspDueDates: any[];
     piInitial: string;
     analystInitial: string;
     piSign: Date;
     analystSign: Date;
     addComments: string[];
     stages: Stage[];
}
export class Stage {
    Id: number;
    name: string;
    expectedDate: Date;
    completedDate: Date;
    uasReviewRequired: boolean;
    uasReviewed: boolean;
    deadlineType: string;
    requiredForms: string[];
    // forms: any[];
    addComments: string[];

}
