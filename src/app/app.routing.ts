import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServicesComponent } from './components/services/services.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { JabberservicesComponent } from './components/jabberservices/jabberservices.component';
import { EmployeesearchComponent } from './components/employeesearch/employeesearch.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { EmployeeinfoComponent } from './components/employeeinfo/employeeinfo.component';
import { TopcountryframeComponent } from './components/topcountryframe/topcountryframe.component';

import { ServicessearchComponent } from './components/servicessearch/servicessearch.component';

import { ReviewdetailsComponent } from './components/reviewdetails/reviewdetails.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { VoipInNewComponent } from './components/voip-in-new/voip-in-new.component';
import { VoipInDeleteComponent } from './components/voip-in-delete/voip-in-delete.component';
import { EmployeesearchVoipDeleteComponent } from './components/employeesearch-voip-delete/employeesearch-voip-delete.component';
import { RevalidationpendingComponent } from './components/revalidationpending/revalidationpending.component';
import {ApprovalpendingComponent} from './components/approvalpending/approvalpending.component';
import { VoipLaNewComponent } from './components/voip-la-new/voip-la-new.component';
import { VoipInUpdateComponent } from './components/voip-in-update/voip-in-update.component';
import { VoipEmeaNewComponent } from './components/voip-emea-new/voip-emea-new.component';
import { VoipUsaNewComponent } from './components/voip-usa-new/voip-usa-new.component';
import { VoipInMoveComponent } from './components/voip-in-move/voip-in-move.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {VoipLaUpdateComponent} from './components/voip-la-update/voip-la-update.component';
import { FacInNewComponent } from './components/fac-in-new/fac-in-new.component';
import { HpAuUpdateComponent } from './components/hp-au-update/hp-au-update.component';
import { FacInUpdateComponent } from './components/fac-in-update/fac-in-update.component';
import { FacInResetComponent } from './components/fac-in-reset/fac-in-reset.component';


import { ApprovalResultPageComponent } from './components/approval-result-page/approval-result-page.component';

import { FacservicesComponent } from './components/facservices/facservices.component';
import {ApprovalSinglePageComponent} from './components/approval-single-page/approval-single-page.component';
import { VoipUsaUpdateComponent } from './components/voip-usa-update/voip-usa-update.component';
import { HpInNewComponent } from './components/hp-in-new/hp-in-new.component';
import { FixedphoneservicesComponent } from './components/fixedphoneservices/fixedphoneservices.component';
import { HpInUpdateComponent } from './components/hp-in-update/hp-in-update.component';
import { HpInDeleteComponent } from './components/hp-in-delete/hp-in-delete.component';
import { HpUsaNewComponent } from './components/hp-usa-new/hp-usa-new.component';
import { HpEmeaNewComponent } from './components/hp-emea-new/hp-emea-new.component';
import { HpIndonesiaNewComponent } from './components/hp-indonesia-new/hp-indonesia-new.component';
import { HpAuNewComponent } from './components/hp-au-new/hp-au-new.component';
import { FacInDeactivateComponent } from './components/fac-in-deactivate/fac-in-deactivate.component';
import { EnExtensionAuSummaryComponent } from './components/en-extension-au-summary/en-extension-au-summary.component'
import { VoipAuMoveComponent } from './components/voip-au-move/voip-au-move.component';




const appRoutes: Routes = [
    { path: 'unauthorized', component: HomepageComponent },
    { path: '', component: HomepageComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'services' ,  component: ServicesComponent },
  // { path: 'services' , loadChildren: () => import('./components/navigation/navigation.component').then(m => m.ServicesComponent)}  
    { path: 'jabberservices', component: JabberservicesComponent },   
    { path: 'fixedphoneservices', component: FixedphoneservicesComponent }, 
    { path: 'facservices', component: FacservicesComponent },   
    { path: 'employeesearch', component: EmployeesearchComponent },    
    { path: 'employeeinfo', component: EmployeeinfoComponent },
    { path: 'resultpage', component: ResultpageComponent },
    { path: 'requests', component: RequestsComponent },    
    { path: 'topcountryframe', component: TopcountryframeComponent },
    { path: 'searchresult', component: ServicessearchComponent },  
    { path: 'inprogress', component: DummyComponent },
    { path: 'entrydetailsjd', component: VoipInDeleteComponent },
    { path: 'entrydetails', component: VoipInNewComponent },
    { path: 'entrydetailsiju', component: VoipInUpdateComponent },  
    { path: 'entrydetailsijm', component: VoipInMoveComponent }, 
    { path: 'entrydetailsaumv', component: VoipAuMoveComponent},     
    { path: 'reviewdetails', component: ReviewdetailsComponent },  
    { path: 'resultpage', component: ResultpageComponent },
    {path: 'approvalresult', component: ApprovalResultPageComponent},
    {path: 'approvalsingle', component:ApprovalSinglePageComponent},
    { path: 'employeesearchdelete', component: EmployeesearchVoipDeleteComponent},
    { path: 'employeesearchres', component: EmployeesearchComponent},
    { path: 'employeesearchreq', component: EmployeesearchComponent},
    { path: 'revalidationpending', component: RevalidationpendingComponent},
    { path: 'approvalpending', component: ApprovalpendingComponent},
    { path: 'entrydetailsla', component: VoipLaNewComponent},
    { path: 'entrydetailsemea', component: VoipEmeaNewComponent},
    { path: 'entrydetailsus', component: VoipUsaNewComponent},        
    { path: 'resources', component: ResourcesComponent},
    { path: 'entrydetailsfn', component: HpInNewComponent},
    { path: 'entrydetailsfup', component: HpInUpdateComponent},
    { path: 'entrydetailsfde', component: HpInDeleteComponent},
    { path: 'entrydetailsfusanew', component: HpUsaNewComponent},
    { path: 'entrydetailsfemeanew', component: HpEmeaNewComponent},
    { path: 'entrydetailsindo', component: HpIndonesiaNewComponent},

    { path: 'entrydetailsaufn', component: HpAuNewComponent},
    { path: 'entrydetailsaufu', component: HpAuUpdateComponent},
    { path: 'entrydetailsfac', component: FacInNewComponent},
    { path: 'entrydetailsfacu', component: FacInUpdateComponent},
    { path: 'entrydetailsfacr', component: FacInResetComponent},
    { path: 'entrydetails_update_la', component: VoipLaUpdateComponent},
    { path: 'entrydetails_update_us', component: VoipUsaUpdateComponent},
    { path: 'extensionsummaryau', component: EnExtensionAuSummaryComponent}, 
    
    { path: 'pagenotfound', component: PagenotfoundComponent},
    { path: 'pagenotfound?error', component: PagenotfoundComponent},
    { path: 'entrydetailsfacin', component: FacInNewComponent},
    { path: 'entrydetailsfacdeactive', component: FacInDeactivateComponent},
    
    
    
   // {path: '**', redirectTo:'/pagenotfound?error'}
   {path: '**', component: PagenotfoundComponent},
   {path: 'entrydetailsjusaup', component: VoipUsaUpdateComponent}
    
    
];


export const appRoutingProviders = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});