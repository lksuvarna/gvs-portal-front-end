import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
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
import { JabberservicesComponent } from './components/jabberservices/jabberservices.component';
import { TopcountryframeComponent } from './components/topcountryframe/topcountryframe.component';
import { cloudantservice } from '../app/_services/cloudant.service';
import { MiddleframeComponent } from './components/middleframe/middleframe.component';
import { FilterPipe } from './filter.pipe';
import { DropdownsearchPipe } from './dropdownsearch.pipe'
import { VoipInNewComponent } from './components/voip-in-new/voip-in-new.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { VoipInUpdateComponent } from './components/voip-in-update/voip-in-update.component';
import { VoipInDeleteComponent } from './components/voip-in-delete/voip-in-delete.component'
import { EmployeesearchVoipDeleteComponent } from './components/employeesearch-voip-delete/employeesearch-voip-delete.component';





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
    JabberservicesComponent,
    TopcountryframeComponent,
    MiddleframeComponent,
    FilterPipe,
    DropdownsearchPipe,
    VoipInNewComponent,
    DummyComponent,
    VoipInUpdateComponent,
    VoipInDeleteComponent,
    EmployeesearchVoipDeleteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    appRoutingProviders,
    CommonModule
   
    
    
  ],
  providers: [cloudantservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
