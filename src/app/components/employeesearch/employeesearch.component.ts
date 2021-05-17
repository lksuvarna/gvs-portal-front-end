import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { bpservices } from '../../_services/bp.service';
import { Db2Service } from '../../_services/db2.service';
import { servicenowservice } from '../../_services/servicenow.service';
import { TranslateConfigService } from '../../_services/translate-config.service';
import { delay, timeout } from 'rxjs/operators';




@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  radioAction: string = "";
  hideDisTextBox: boolean = false;
  hideDisserial: boolean = true;
  algMobile: boolean = false
  ackMobileAlg: boolean = false
  checked : any=false;

  constructor(private router: Router, private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private route: ActivatedRoute, private bpservices: bpservices, private Db2Service: Db2Service, private servicenowservice: servicenowservice,private servicesd : TranslateConfigService) { }
  cloudantData: any = []
  servicesData: any = []
  subCountries: any = []
  countryname: any;
  lookuploc: any;
  countryroute:any;
  flocations: any;
  emmodels: any;
  cmmodels: any;
  fpmodels: any;
  ccode = '';
  pcode = '';
  exitrouting: any;
  exitservice: any;
  routingname: any;
  fullName: any;
  service = '';
  fixedphone = '';
  itn = '';
  backbutton: any;
  step: any;
  s: any;
  i:any;
  sno: any;
  identifier: any;
  warninginfo = true;
  warninginfosnow = true;
  employeeInfo: any
  employeeSerial = ''
  radio: any;
  empno: any;
  datasnow: any;
  datadb: any
  dataloc: any
  navpage: any; navpage1: any;
  countrydetails: any;
  notvalid = false
  dataloading = false
  showloader = false
  errorinfo = false
  reqname: any
  title: any;
  showCountryCode = false
  countryCA = '';
  itns: any = [];
  voice_mail: any = [];
  cos: any = [];
  Resource_Type : any =[];
  Resource_Location : any=[];
  Hard_Phone: any=[];
  serviceName: any;
  returnValue: any;
  validcnum = false;
  extracodes: any = [];
  mainConfiguration :any;
  selectedCountry: any


  profile_location:any = [];

  ngOnInit(): void {
    this.mainConfiguration = this.servicesd.readConfigFile();
    this.showloader = false
    this.selectedCountry = sessionStorage.getItem('selectedCountry')
    if(this.selectedCountry === null || this.selectedCountry === ''){
      this.selectedCountry = 'Select One'
    }
    
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.pcode = params.country;
      this.service = params.service;
    this.fullName = this.cookie.getCookie('username');
    if (this.fullName.includes(undefined)) {
      this.fullName = this.cookie.getCookie('user');
    }
    this.fullName = this.fullName.replace(/[&\/\\#+()$~%.'":*?<>{}0-9]/g, ' ');
    this.fullName = this.fullName.replace(",", ", ");
    this.ccode = this.cookie.getCookie('ccode');
    this.countryroute=sessionStorage.getItem('countryroute')
  //  alert(this.countryroute)
  // alert(this.pcode)
//if(sessionStorage.getItem('countrydetails')==undefined ) {

  if (this.countryroute === '612' && this.service === 'mobile_new') {
    this.algMobile = true
  }

  if (this.pcode!== this.countryroute) {
    
  this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
    
    
    this.countryname = data.countrydetails;
    sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
    this.countrydetails=JSON.stringify(data.countrydetails);
    this.countrydetails = JSON.parse(this.countrydetails)
    this.getTitle();
    sessionStorage.setItem('countryroute', this.pcode);
    
    if (this.countrydetails.testuser) {
      this.ccode = this.countrydetails.testuser
    }
    else { this.ccode = this.cookie.getCookie('ccode'); }
    
        if (this.countrydetails.scountries) {
          this.showCountryCode = true
          this.subCountries = this.countrydetails.scountries
        }
  });
  
}
   else{ this.countrydetails = sessionStorage.getItem('countrydetails');
   this.countrydetails = JSON.parse(this.countrydetails)
   
   if (this.countrydetails.testuser) {
     this.ccode = this.countrydetails.testuser
   }
   else { this.ccode = this.cookie.getCookie('ccode'); }
  }
  
 
    
        console.log("navigation component" + this.pcode);

        this.backbutton = sessionStorage.getItem('backbutton');
        this.step = sessionStorage.getItem('step');
        //to get the titles

        //this.radioAction = "mySelf"; 
        
        if (sessionStorage.getItem('radioAction') === null || sessionStorage.getItem('radioAction') === '') {

          //if ("radioAction" in localStorage) {
          this.radioAction = "myself";

        }
        else {
          this.radio = sessionStorage.getItem('radioAction')
          console.log("radiabutton" + this.radio)
          this.radioAction = this.radio
          this.empno = sessionStorage.getItem('empserial')

          this.onRequestForChangesession();

        }

        if (this.service != sessionStorage.getItem('serviceName')) {
          this.radioAction = 'myself';
          this.hideDisTextBox = false;
          this.hideDisserial = true;
          sessionStorage.setItem('serviceName', this.service);
          if (this.notvalid == true) {
            this.notvalid = false;
            this.showloader = false;
            this.errorinfo = false;
          }
        }


        //for lhs


        const servicesData = {
          "data": [
            {
              "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request", "Mobile"],
              "step": 1,
            }
          ]
        }

        this.servicesData = servicesData.data[0]

        this.getTitle();
        if (this.countrydetails.scountries) {
          this.showCountryCode = true
          this.subCountries = this.countrydetails.scountries
        }
      })
    setTimeout(() => {
      if (sessionStorage.getItem('serviceName') == 'jabber_move' && this.step == null || sessionStorage.getItem('serviceName') == 'jabber_move' && sessionStorage.getItem('empserial') == '') {
        this.returnValue = confirm(this.mainConfiguration.alerttranslation.moverequest);
        if (this.returnValue == false) {
          this.router.navigate(['/jabberservices'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
        }
      }
    }, 200);
    setTimeout(() => {
      if (this.service.includes('fixed')) {
        if (!(this.countrydetails.power_users.includes(this.ccode))) {
          alert(this.countrydetails.alert_message.replace(/<br>/g,"\n"));
          this.router.navigate(['fixedphoneservices'], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
        }
      }
    }, 200);


    setTimeout(() => {
      if(this.service=='specialrequest'){
        if(this.countrydetails.special_request_power_users!=undefined){
          if(!(this.countrydetails.special_request_power_users.includes(this.ccode))){
            alert(this.countrydetails.special_request_alert_message);
              this.router.navigate(['services'], { skipLocationChange: true ,queryParams: { country: this.pcode, service:'services' } });
          }
        }
      }
    }, 200);
   


  }

  onSubmit(formData: NgForm) {

    sessionStorage.setItem('radioAction', this.radioAction.toLowerCase());
    console.log(this.pcode + this.ccode)
    if (this.radioAction.toLowerCase() == "myself") {
      if (this.countrydetails.extracodes) {

        if (this.countrydetails.extracodes.split(',').some((s: string[]) => s.includes(this.ccode.substr(6, 9)))) { }
        else {
          alert(""+this.mainConfiguration.alerttranslation.Only+ " " + this.countrydetails.name + " "+this.mainConfiguration.alerttranslation.serialnumbersareallowed+" " + this.countrydetails.name);
          return;
        }
      }

      else if (this.countrydetails.scountries) {

        if (this.countrydetails.scountries.some((s: string | string[]) => s.includes(this.ccode.substr(6, 9)))) { }
        else {
          alert(""+this.mainConfiguration.alerttranslation.Only+ " " + this.countrydetails.name +  " "+this.mainConfiguration.alerttranslation.serialnumbersareallowed+" " + this.countrydetails.name);
          return;
        }
      }
      else if (this.pcode !== this.ccode.substr(6, 9)) {
        alert(""+this.mainConfiguration.alerttranslation.Only+ " " + this.countrydetails.name +  " "+this.mainConfiguration.alerttranslation.serialnumbersareallowed+" " + this.countrydetails.name);
        return;
      }

      if(this.countryroute === '612' && this.service === 'mobile_new' && this.checked===false) {
        alert('Please read the Algeria Mobility Policy');
        return;
      }
    }
    if (this.radioAction.toLowerCase() == "anotheremployee") {
      if (formData.value.employeeSerial.trim().length == 0 && this.hideDisTextBox == true) {
        alert(this.mainConfiguration.alerttranslation.enterserialnumber);
        return;
      }
      else if ((formData.value.employeeSerial.trim().length < 6 || formData.value.employeeSerial.includes(' ')) && this.hideDisTextBox == true) {
        alert(this.mainConfiguration.alerttranslation.digitserialnumber);
        return;
      } else if (this.showCountryCode && this.hideDisTextBox && (formData.value.selectedCountry === '' || formData.value.selectedCountry === 'Select One')) {
        alert(this.mainConfiguration.alerttranslation.selectcountrycode);
        return;
      }
      else {
        sessionStorage.setItem('empserial', formData.value.employeeSerial)
        if (this.showCountryCode) {
          sessionStorage.setItem('selectedCountry', formData.value.selectedCountry)
          this.employeeSerial = formData.value.employeeSerial + (formData.value.selectedCountry).substr(formData.value.selectedCountry.length - 3);
        } else {
          this.employeeSerial = formData.value.employeeSerial + this.pcode;
        }
      }

      if(this.countryroute === '612' && this.service === 'mobile_new' && this.checked===false) {
        alert('Please read the Algeria Mobility Policy');
        return;
      }
    }
    //for self
    else {
      this.employeeSerial = this.ccode

      sessionStorage.setItem('empserial', this.ccode)

    }
    //to change the routing

    if (this.service == "jabber_new" || this.service == "fac_new" ) {
      this.getTitle();
      this.navpage = this.routingname; this.navpage1 = '/employeeinfo';
    }
    else {
      this.getTitle();
      if (this.radioAction.toLowerCase() == "myself") {
        if (this.service == "requests" || this.service == "resources" || this.service == "approvalpending" || this.service == "revalidationpending") {
          this.navpage = '/' + this.service; this.navpage1 = '/' + this.service;
        }
        else { this.navpage = this.routingname; this.navpage1 = this.routingname; }
      }
      else {
        this.navpage = '/employeeinfo'; this.navpage1 = '/employeeinfo';
      }
    }


    this.showloader = true
    //BP verification and getting data
    if (this.countrydetails.extracodes) {
      this.extracodes = this.countrydetails.extracodes.split(',')
      console.log(this.extracodes.length)     
      
     
    
      this.getExtracodes();
     
      
     
  }
  else {
    this.getBPData();
  }
  }
 async getExtracodes():Promise<any>{
  var count=0
   for ( this.i = 0; this.i < this.extracodes.length;this.i++) {  
  //  this.i = 0      
   // while(this.i < this.extracodes.length)  {    
    var employeeSerial1 = this.employeeSerial.substr(0, 6) + this.extracodes[this.i]
    console.log(this.i)
      
      console.log("empserialnumr" + employeeSerial1)
   this.bpservices.bpdetails(employeeSerial1).subscribe(data => {
       console.log(' BP Detailschina', data.userdata);
      count++;
       if (data.userdata) {
         this.employeeSerial = data.username.uid;
         console.log("empserialnumrif" + this.employeeSerial);
         this.validcnum = true;

         this.getBPData();

         return;

       }
       else {
        if(count == this.extracodes.length) {
          this.getBPData();
          return;
          }
       }
     })
     
      
       
     
    }
 
    
  
  }

  ackMobile(){
    if (this.checked){
      this.ackMobileAlg = true
    } else {
      this.ackMobileAlg = false
    }
  }

  getBPData(): any {
    console.log(' this.employeeSerial', this.employeeSerial);
    this.bpservices.bpdetails(this.employeeSerial).subscribe(data => {
      console.log(' this.employeeSerial', this.employeeSerial);
      console.log(' BP Details', data.userdata);
      if (data.userdata) {
        var ename = data.username.preferredlastname + ", " + data.username.preferredfirstname
        if (data.username.preferredlastname == undefined || data.username.preferredfirstname == undefined) {
          ename = data.username.callupname
        }
        this.employeeInfo = {

          employeeName: ename,
          jobResponsibility: data.username.jobresponsibilities,
          businessUnit: data.bu,
          department: data.username.dept,
          country: data.username.co,
          email: data.username.preferredidentity,
          sno: data.username.uid,
          workloc: data.username.workloc,
        }
        sessionStorage.setItem('employeeInfo', JSON.stringify(this.employeeInfo))
        sessionStorage.setItem('cnum', this.employeeSerial)
        this.warninginfo = false
        this.warninginfosnow = false
        sessionStorage.setItem('warninginfo', 'false1');
        sessionStorage.setItem('warninginfosnow', 'false1');
        sessionStorage.setItem('identifier', '');
        sessionStorage.setItem('voice_mail', '');
        sessionStorage.setItem('cos', '');
        //Data and routing 

        if (this.service.includes("specialrequest")) {
          this.getLocationdata();
        }

        if (this.service == "jabber_new" || this.service == "fac_new" || this.service == "specialrequest" || this.service == "mobile_new") {
          this.getDBdata()
        }
        if (this.service == "requests") {
          this.getSNOWdata();
          
        }
        if (this.service.includes("fixedphone")) {
          this.getLocationdata();

        }

        if (this.service == "resources" || this.service == "jabber_delete" || this.service == "jabber_update" || this.service == 'jabber_move' || this.service == 'fac_update' || this.service == 'fac_reset' || this.service == 'fac_delete') {
          this.getDBdata();

        }
        //end data and routing
      }
      else {
        this.showloader = false
        this.notvalid = true

      }
      sessionStorage.setItem('title', this.title)
      sessionStorage.setItem('navpage', this.routingname)


      //this.isDataLoaded=true
    });
  }



  getSNOWdata(): any {
    this.servicenowservice.searchsnow(this.employeeSerial, this.service, this.countrydetails.isocode + this.reqname + this.employeeSerial.substr(0, 6)).subscribe(data => {
      console.log(' snow response', data);
      console.log(' snow response', data.message.length);
      if (data.message.length > 0) {
        console.log(' snow response1', data.message.length);
        this.warninginfosnow = true
        sessionStorage.setItem('warninginfosnow', 'true1')
        this.identifier = data.message

        sessionStorage.setItem('identifier', JSON.stringify(this.identifier))
        sessionStorage.setItem('identifier1', JSON.stringify(this.identifier))

        this.datasnow = "yes"

        this.router.navigate([this.navpage1], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });

      }

      else {
        this.datasnow = "nodata";
        if (this.service == "jabber_new" || this.service == "jabber_move" || this.service == "fac_new"  || this.service == "fac_update"  || this.service == "fac_reset" ||this.service == "fac_delete") {
          this.getLocationdata()
        }

        else {
          if (this.radioAction.toLowerCase() == "anotheremployee") {
            this.router.navigate([this.navpage1], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
          }
          else {
            this.router.navigate([this.navpage], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
          }
        }
      }
    },
      (error) => {                              //Error callback
        console.error('error caught in component' + error);
        this.errorinfo = true;
        this.showloader = false;
      }
    )
    return this.datasnow;
  }

  getDBdata() {
    this.Db2Service.search_db2(this.employeeSerial, this.service, this.fixedphone, this.itn, this.countryname).subscribe(data => {
      console.log(' db2 response', data);
      console.log(' db2 response', data.message.length);
      if (data.message.length > 0) {
         this.warninginfo = true
         sessionStorage.setItem('warninginfo', 'true1');
         for (var i = 0; i < data.message.length; i++) {
          this.itns[i] = data.message[i].IDENTIFIER.trim();
          if (this.service == 'jabber_move') {
          if (data.message[i].ATTRIBUTE3 == null)
          this.profile_location[i] = 'NA'
            else
            this.profile_location[i] = data.message[i].ATTRIBUTE3.trim();
          }
          if (this.service == 'jabber_update') {

            if (data.message[i].VOICEMAIL == null)
              this.voice_mail[i] = 'NA'
            else
              this.voice_mail[i] = data.message[i].VOICEMAIL.trim();
            if (data.message[i].ATTRIBUTE5 == null)
              this.cos[i] = 'NA';
            else
              this.cos[i] = data.message[i].ATTRIBUTE5.trim();
          }
         
         }
         // this.identifier = data.message[0].IDENTIFIER
         if (this.service == "resources") {
          sessionStorage.setItem('identifier', JSON.stringify(data.message))
          this.datadb = "yes";

         } else if(this.service == 'specialrequest'){
          sessionStorage.setItem('identifier', JSON.stringify(data.message));
          this.datadb = "yes";    
        }else if (this.service == "fac_new") {
          sessionStorage.setItem('identifier', 'xxxxxxxx') ;
          this.datadb= "yes";

        } else if (this.service == "fac_update" || this.service == "fac_reset" || this.service == "fac_delete") {

          sessionStorage.setItem('db2data', JSON.stringify(data.message)) ; 
          if((JSON.stringify(data.message[0].IDENTIFIER)).trim() !== ""){
            sessionStorage.setItem('identifier', 'xxxxxxxx') ;
          }
          this.datadb = "yes";
        }
        else {
          sessionStorage.setItem('identifier', this.itns);
          sessionStorage.setItem('voice_mail', this.voice_mail);
          sessionStorage.setItem('cos', this.cos);
           sessionStorage.setItem('profile_location',this.profile_location);
          this.datadb = "yes";
        }

        if (this.service == "jabber_delete" || this.service == 'jabber_update' || this.service == 'jabber_move' || this.service == 'fac_update' || this.service == 'fac_reset' ||this.service == 'fac_delete' ||this.service == 'mobile_new'  ) {

          console.log("insidesnowdelete")
          this.getSNOWdata();
          this.datadb = "yes";
        }
        else {

          this.router.navigate([this.navpage1], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
        }
      }
      else {
        console.log("nodb2data");
        this.datadb = "nodata";
        if (this.service == "jabber_new" || this.service == "fac_new" ) {
          this.getSNOWdata()
        }
        else {
          
          if (this.radioAction.toLowerCase() == "anotheremployee") {
            this.router.navigate([this.navpage1], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
          }
          else {
            this.router.navigate([this.navpage], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
          }
        }
      }
    },
      (error) => {                              //Error callback
        console.error('error caught in component' + error);
        this.errorinfo = true;
        this.showloader = false;
      })
    return this.datadb
  }
  getLocationdata() {
    this.cloudantservice.getlocationdetails(this.pcode).subscribe(data => {
      console.log('Response received navigation', data.locationdetails);
      if (this.service.includes('jabber')) {
        if (this.pcode == '631') {
          var loc = this.employeeSerial.substr(6, 9) + "jlocations"
          console.log(loc)
          this.lookuploc = JSON.stringify((data.locationdetails[loc]))
        }
        else {
          if (data.locationdetails.ccodes) {
            sessionStorage.setItem('ccodes', JSON.stringify(data.locationdetails.ccodes))
          }
          this.lookuploc = JSON.stringify(data.locationdetails.jlocations)
        }
      }
      else if (this.service.includes('fixed')) {
        this.lookuploc = JSON.stringify(data.locationdetails.flocations)
        sessionStorage.setItem('fdevices', JSON.stringify(data.locationdetails.fdevices))
        sessionStorage.setItem('emmodels', JSON.stringify(data.locationdetails.emmodels))
        sessionStorage.setItem('cmmodels', JSON.stringify(data.locationdetails.cmmodels))
        sessionStorage.setItem('fpmodels', JSON.stringify(data.locationdetails.fpmodels))
        sessionStorage.setItem('updaterequired', JSON.stringify(data.locationdetails.updaterequired))
        sessionStorage.setItem('fpumodels', JSON.stringify(data.locationdetails.fpumodels))
      }
      else if (this.service.includes('fac')) {
        this.lookuploc = JSON.stringify(data.locationdetails.faclocations)
      }
      else if (this.service.includes('specialrequest')) {
        this.lookuploc = JSON.stringify(data.locationdetails.slocations)
      }
      // sessionStorage.setItem('locationdetails', JSON.stringify(data.locationdetails.jlocations));
      sessionStorage.setItem('locationdetails', this.lookuploc)
      if (this.radioAction.toLowerCase() == "anotheremployee") {
        this.router.navigate([this.navpage1], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
      }
      else {
        this.router.navigate([this.navpage], { skipLocationChange: true ,queryParams: { country: this.pcode, service: this.service } });
      }
    });

  }
  onRequestForChange() {
    this.empno = '';
    this.selectedCountry = 'Select One';
    if (this.radioAction.toLowerCase() == "anotheremployee") {
      this.hideDisTextBox = true;
      this.hideDisserial = false;

    }
    else if (this.radioAction.toLowerCase() == "myself") {
      this.hideDisTextBox = false;
      this.hideDisserial = true;

    }

  }
  getRoutingname() {

  }
  getTitle() {
    //for title
    switch (this.service) {
      case "jabber_new":
        this.title = "Request new Jabber service";
        this.exitrouting = 'jabberservices';

        if (this.countrydetails.jnavpage == 'AP') {
          this.routingname = "/entrydetails";
        } else if (this.countrydetails.jnavpage == 'EMEA') {
          this.routingname = "/entrydetailsemea";
        }
        else if (this.countrydetails.jnavpage == 'US') {
          this.routingname = "/entrydetailsus";
        }
        else if (this.countrydetails.jnavpage == 'LA') {
          this.routingname = "/entrydetailsla";
        }
        this.reqname = "-NS-";
        break;
      case "jabber_delete":
        this.title = "Delete Jabber Request";
        this.routingname = "/entrydetailsjd";
        this.exitrouting = 'jabberservices';
        this.reqname = "-DS-";
        break;
      case "jabber_update":
        this.title = "Update Jabber Request";
        this.exitrouting = 'jabberservices';
        this.reqname = "-US-";
        if (this.countrydetails.jnavpage == 'LA')
          this.routingname = "/entrydetails_update_la";
        else if (this.countrydetails.jnavpage == 'US')
          this.routingname = "/entrydetails_update_us";
        else
          this.routingname = "/entrydetailsiju";
        break;
      case "jabber_move":
        this.title = "Move Jabber Request";
        this.exitrouting = 'jabberservices';
        this.reqname = "-MS-";
        if (this.countrydetails.jnavpage == 'AP') {
          this.routingname = "/entrydetailsijm";
        } else if (this.countrydetails.jnavpage == 'EMEA') {
          this.routingname = "/entrydetailsaumv";
        }
        break;
      case "fixedphone_new":
        this.title = "Fixed Phone - New Request";
        this.exitrouting = 'fixedphoneservices';
        if (this.countrydetails.fnavpage == 'AP') {
          this.routingname = "/entrydetailsfn";
        } else if (this.countrydetails.fnavpage == 'AU') {
          this.routingname = '/entrydetailsaufn';
        } else if (this.countrydetails.fnavpage == 'EMEA') {
          this.routingname = '/entrydetailsfemeanew';
          //Add routingname here for EMEA
        } else if (this.countrydetails.fnavpage == 'NA') {
          //Add routingname here for NA
        } else if (this.countrydetails.fnavpage == 'US') {
          this.routingname = '/entrydetailsfusanew';
        } else if (this.countrydetails.fnavpage == 'ID') {
          this.routingname = "/entrydetailsindo";
        }
        this.reqname = "-NS-";
        break;
      case "fixedphone_update":
        this.title = "Fixed Phone - Update Request";
        this.exitrouting = 'fixedphoneservices';
        
        if(this.countrydetails.fnavpage == 'AP') {
        this.routingname = "/entrydetailsfup";
        } else if (this.countrydetails.fnavpage == 'EMEA') {
          this.routingname = '/entrydetailshpemea';
        }else if (this.countrydetails.fnavpage == 'AU') {
          this.routingname = '/entrydetailsaufu';
        }
        this.reqname = "-US-";
        break;
      case "fixedphone_delete":
        this.title = "Fixed Phone - Delete Request";
        this.routingname = "/entrydetailsfde";
        this.exitrouting = 'fixedphoneservices';
        this.reqname = "-DS-";
        break;
      case "mobile_new":
          this.title="Mobile New Request";
          this.routingname="/entrydetailsmobile";
          this.exitrouting='mobileservices';
          this.reqname="-NS-";
          break;
      case "fac_new":
      this.title="FAC Code New Request";
      this.routingname="/entrydetailsfac";
      this.exitrouting='facservices';
      this.reqname="-NS-";
      break;

      case "fac_delete":
      this.title="FAC Code Delete Request";
      this.routingname="/entrydetailsfacdeactive";
      this.exitrouting='facservices';
      this.reqname="-DS-";
      break;

      case "fac_update":
        this.title = "FAC Code Update Request";
        this.routingname = "/entrydetailsfacu";
        this.exitrouting='facservices';
        this.reqname = "-US-";
        break;
      case "fac_reset":
        this.title="FAC Code Reset Request";
        this.routingname="/entrydetailsfacr";
        this.exitrouting='facservices';
        this.reqname="-RS-";
        break;

      case "resources":
        this.title = "Resources";
        this.exitrouting = 'services';
        this.exitrouting = 'services';
        break;
      case "requests":
        this.title = "Requests";
        this.exitrouting = 'services';
        break;
      case "approvalpending":
        this.title = "Approvals";
        this.exitrouting = 'services';
        break;

        case "specialrequest":
          this.title = "Special Request";
          this.routingname = '/specialrequest';
          this.exitrouting = 'services';
          break;
       
    }
  }
  hidedata() {
    this.notvalid = false;
    this.errorinfo = false;

  }
  onRequestForChangesession() {

    if (this.radioAction.toLowerCase() == "anotheremployee") {
      this.hideDisTextBox = true;
      this.hideDisserial = false;

    }
    else if (this.radioAction.toLowerCase() == "myself") {
      this.hideDisTextBox = false;
      this.hideDisserial = true;

    }

  }
}
