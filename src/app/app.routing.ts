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

const appRoutes: Routes = [
    { path: 'unauthorized', component: HomepageComponent },
    { path: '', component: HomepageComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'jabberservices', component: JabberservicesComponent },
    { path: 'employeesearch', component: EmployeesearchComponent },
    { path: 'employeeinfo', component: EmployeeinfoComponent },
    { path: 'resultpage', component: ResultpageComponent },
    { path: 'topcountryframe', component: TopcountryframeComponent },
    { path: 'searchresult', component: ServicessearchComponent },

    
];


export const appRoutingProviders = RouterModule.forRoot(appRoutes);