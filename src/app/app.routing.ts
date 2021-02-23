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
import { ReviewdetailsComponent } from './components/reviewdetails/reviewdetails.component';
import { RequestsComponent } from './components/requests/requests.component';
import { DummyComponent } from './components/dummy/dummy.component';


const appRoutes: Routes = [
    { path: 'unauthorized', component: HomepageComponent },
    { path: '', component: HomepageComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'services' ,  component: ServicesComponent },
    { path: 'jabberservices', component: JabberservicesComponent },   
    { path: 'employeesearch', component: EmployeesearchComponent },    
    { path: 'employeeinfo', component: EmployeeinfoComponent },
    { path: 'resultpage', component: ResultpageComponent },
    { path: 'requests', component: RequestsComponent },    
    { path: 'topcountryframe', component: TopcountryframeComponent },
    { path: 'reviewdetails', component: ReviewdetailsComponent }, 

    { path: 'inprogress', component: DummyComponent }, 

];


export const appRoutingProviders = RouterModule.forRoot(appRoutes);