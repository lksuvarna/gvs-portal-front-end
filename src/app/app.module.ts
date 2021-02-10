import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployeesearchComponent } from './components/employeesearch/employeesearch.component';
import { EmployeeinfoComponent } from './components/employeeinfo/employeeinfo.component';
import { EntrydetailsComponent } from './components/entrydetails/entrydetails.component';
import { ReviewdetailsComponent } from './components/reviewdetails/reviewdetails.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { CountrysearchComponent } from './components/countrysearch/countrysearch.component';
import { ServicessearchComponent } from './components/servicessearch/servicessearch.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ApprovalpendingComponent } from './components/approvalpending/approvalpending.component';
import { RevalidationpendingComponent } from './components/revalidationpending/revalidationpending.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { appRoutingProviders} from './app.routing';
import { UitoplinksComponent } from './components/uitoplinks/uitoplinks.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomepageComponent,
    ServicesComponent,
    EmployeesearchComponent,
    EmployeeinfoComponent,
    EntrydetailsComponent,
    ReviewdetailsComponent,
    ResultpageComponent,
    CountrysearchComponent,
    ServicessearchComponent,
    NavigationComponent,
    ResourcesComponent,
    RequestsComponent,
    ApprovalpendingComponent,
    RevalidationpendingComponent,
    FeedbackComponent,
    UitoplinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    appRoutingProviders
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
