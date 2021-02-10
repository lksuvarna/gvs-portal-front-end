import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServicesComponent } from './components/services/services.component';


const appRoutes: Routes = [
    { path: 'unauthorized', component: HomepageComponent },
    { path: '', component: HomepageComponent },
    { path: 'services', component: ServicesComponent },
    
];

//export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders = RouterModule.forRoot(appRoutes);