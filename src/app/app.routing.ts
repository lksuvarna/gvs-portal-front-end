import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServicesComponent } from './components/services/services.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { JabberservicesComponent } from './components/jabberservices/jabberservices.component';


const appRoutes: Routes = [
    { path: 'unauthorized', component: HomepageComponent },
    { path: '', component: HomepageComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'jabberservices', component: JabberservicesComponent },
    
];


export const appRoutingProviders = RouterModule.forRoot(appRoutes);