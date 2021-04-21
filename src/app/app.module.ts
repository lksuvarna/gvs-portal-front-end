import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
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
import { VoipUsaNewComponent } from './components/voip-usa-new/voip-usa-new.component';
import { VoipInMoveComponent } from './components/voip-in-move/voip-in-move.component';
import { VoipLaNewComponent } from './components/voip-la-new/voip-la-new.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { VoipInUpdateComponent } from './components/voip-in-update/voip-in-update.component';
import { VoipInDeleteComponent } from './components/voip-in-delete/voip-in-delete.component'
import { EmployeesearchVoipDeleteComponent } from './components/employeesearch-voip-delete/employeesearch-voip-delete.component';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './components/footer/footer.component';
import { StepsComponent } from './components/steps/steps.component';
import { VoipEmeaNewComponent } from './components/voip-emea-new/voip-emea-new.component';
import { VoipAuMoveComponent } from './components/voip-au-move/voip-au-move.component';
import { HpInNewComponent } from './components/hp-in-new/hp-in-new.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { FixedphoneservicesComponent } from './components/fixedphoneservices/fixedphoneservices.component';
import { VoipLaUpdateComponent } from './components/voip-la-update/voip-la-update.component';

import { FacInNewComponent } from './components/fac-in-new/fac-in-new.component';
import { HpAuNewComponent } from './components/hp-au-new/hp-au-new.component';

import { FacservicesComponent } from './components/facservices/facservices.component';

import { VoipUsaUpdateComponent } from './components/voip-usa-update/voip-usa-update.component';
import { HpInUpdateComponent } from './components/hp-in-update/hp-in-update.component';
import { HpInDeleteComponent } from './components/hp-in-delete/hp-in-delete.component';
import { HpUsaNewComponent } from './components/hp-usa-new/hp-usa-new.component';
import { HpEmeaNewComponent } from './components/hp-emea-new/hp-emea-new.component';
import { HpIndonesiaNewComponent } from './components/hp-indonesia-new/hp-indonesia-new.component';

import { FacInUpdateComponent } from './components/fac-in-update/fac-in-update.component';
import { FacInResetComponent } from './components/fac-in-reset/fac-in-reset.component';

import { ApprovalResultPageComponent } from './components/approval-result-page/approval-result-page.component';
import { ApprovalSinglePageComponent } from './components/approval-single-page/approval-single-page.component';






export function rootLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json')
  }

export class GlobalErrorHandler implements ErrorHandler{
handleError(error: Error){
  if(error){
    console.log(error.message);
  }
}

}

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
    FooterComponent,
    StepsComponent,    
    VoipLaNewComponent,
    VoipEmeaNewComponent,
    VoipAuMoveComponent,
    HpInNewComponent,
    HpInUpdateComponent,
    VoipInMoveComponent,
    PagenotfoundComponent,
    FixedphoneservicesComponent,
    VoipUsaNewComponent,
    HpAuNewComponent,
    FacInNewComponent,
    FacservicesComponent,
    VoipLaUpdateComponent,
    FacInNewComponent,
    VoipUsaUpdateComponent,
    HpInDeleteComponent,
    HpUsaNewComponent,
    HpEmeaNewComponent,
    HpIndonesiaNewComponent,

    FacInUpdateComponent,
    FacInResetComponent,

    ApprovalResultPageComponent,
    ApprovalSinglePageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    appRoutingProviders,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide : TranslateLoader,
        useFactory : rootLoaderFactory,
        deps: [HttpClient]
      }
   
       })
   
    
    
  ],
  providers: [cloudantservice, {provide: ErrorHandler, useClass: GlobalErrorHandler}, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
