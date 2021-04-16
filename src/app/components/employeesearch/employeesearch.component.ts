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
import { WebElementPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  radioAction: string = "";
  hideDisTextBox: boolean = false;
  hideDisserial: boolean = true;

  constructor(private router: Router, private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private route: ActivatedRoute, private bpservices: bpservices, private Db2Service: Db2Service, private servicenowservice: servicenowservice) { }
  cloudantData: any = []
  servicesData: any = []
  subCountries: any = []
  countryname: any;
  lookuploc:any;
  flocations:any;
  emmodels:any;
  cmmodels:any;
  fpmodels:any;
  ccode = '';
  pcode = '';
  exitrouting:any;
  exitservice:any;
  routingname:any;
  fullName = '';
  service = '';
  backbutton: any;
  step: any;
  s:any;
  sno:any;
  identifier: any;
  warninginfo = true;
  warninginfosnow = true;
  employeeInfo: any
  employeeSerial = ''
  radio: any;
  empno: any;
  datasnow:any;
  datadb:any
  dataloc:any
  navpage: any; navpage1: any;
  countrydetails: any;
  notvalid = false
  dataloading = false
  showloader = false
  errorinfo=false
  reqname:any
  title:any;
  showCountryCode = false	
	countryCA = '';
  itns:any = [];
  voice_mail:any =[];
  cos : any =[];
  serviceName:any;
  returnValue:any;
  ngOnInit(): void {
    this.showloader = false

    this.fullName = this.cookie.getCookie('username');
    this.fullName = this.fullName.replace(/[&\/\\#+()$~%.'":*?<>{}0-9]/g, ' ');
    this.fullName = this.fullName.replace(",",", ");
    this.ccode = this.cookie.getCookie('ccode');

    this.countrydetails = sessionStorage.getItem('countrydetails')
    this.countrydetails = JSON.parse(this.countrydetails)
    if(this.countrydetails.testuser)
      {
        this.ccode=this.countrydetails.testuser
      }
      else{this.ccode = this.cookie.getCookie('ccode');}
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.pcode = params.country;
        this.service = params.service;
        console.log("navigation component" + this.pcode);
      
    this.backbutton = sessionStorage.getItem('backbutton');
    this.step = sessionStorage.getItem('step');
     //to get the titles
     
    //this.radioAction = "mySelf"; 
    if (sessionStorage.getItem('radioAction') === null ||sessionStorage.getItem('radioAction') === '') {
     
      //if ("radioAction" in localStorage) {
        this.radioAction = "myself";
        
      }
      else {
        this.radio = sessionStorage.getItem('radioAction')
        console.log("radiabutton"+this.radio)
        this.radioAction = this.radio
        this.empno = sessionStorage.getItem('empserial')
  
        this.onRequestForChangesession();
        
      }
     
    if(this.service!= sessionStorage.getItem('serviceName')) {
      this.radioAction = 'myself';
      this.hideDisTextBox = false;
      this.hideDisserial = true;
      sessionStorage.setItem('serviceName',this.service);
      if(this.notvalid == true) {
        this.notvalid = false;
        this.showloader = false;
        this.errorinfo = false;
      }  
    } 
    
   
    //for lhs

   
    const servicesData = {
      "data": [
        {          
          "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
          "step": 1,
        }
      ]
    }

    this.servicesData = servicesData.data[0]
    
      this.getTitle();
      if(this.countrydetails.scountries)  {	
        this.showCountryCode = true	
        this.subCountries = this.countrydetails.scountries	
      }
  })
  setTimeout(()=>{
    if(sessionStorage.getItem('serviceName') == 'jabber_move'&&this.step == null || sessionStorage.getItem('serviceName') == 'jabber_move'&&sessionStorage.getItem('empserial') == '') {
      this.returnValue = confirm('Move request will delete current ITN and a new ITN will be assigned. Click Ok  to proceed or Cancel to quit');
      if(this.returnValue == false) {
        this.router.navigate(['/jabberservices'],{ queryParams: { country: this.pcode, service: this.service } });
      }
    }
  },200);
  }

  onSubmit(formData: NgForm) {

    sessionStorage.setItem('radioAction', this.radioAction.toLowerCase());
    console.log(this.pcode + this.ccode)
    if (this.radioAction.toLowerCase() == "myself" ) {
      if(this.countrydetails.scountries){
        
        if(this.countrydetails.scountries.some((s: string | string[]) => s.includes(this.ccode.substr(6, 9)))){        }
        else{alert("Only " + this.countrydetails.name + " Serial numbers are allowed to create a request for " + this.countrydetails.name);
        return;}
      }
      else if (this.pcode !== this.ccode.substr(6, 9)){                
            alert("Only " + this.countrydetails.name + " Serial numbers are allowed to create a request for " + this.countrydetails.name);
            return;        
      }
     }
    if (this.radioAction.toLowerCase() == "anotheremployee") {
      if (formData.value.employeeSerial.trim().length == 0 && this.hideDisTextBox == true) {
        alert("Please enter a serial number");
        return;
      }
      else if (formData.value.employeeSerial.length < 6 && this.hideDisTextBox == true) {
        alert("Employee Serial Number should be of 6 characters");
        return;
      } else if (this.showCountryCode && this.hideDisTextBox && formData.value.selectedCountry === '') {
        alert("Please select the Country Code");
        return;
      }
      else {
        sessionStorage.setItem('empserial', formData.value.employeeSerial)
        if(this.showCountryCode){
          this.employeeSerial=formData.value.employeeSerial+(formData.value.selectedCountry).substr(formData.value.selectedCountry.length - 3);
        } else {
          this.employeeSerial = formData.value.employeeSerial + this.pcode;
        }
      }
    }
    //for self
    else {
      this.employeeSerial = this.ccode
      
      sessionStorage.setItem('empserial', this.ccode)

    }
    //to change the routing
  
    if (this.service == "jabber_new") {
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
    this.bpservices.bpdetails(this.employeeSerial).subscribe(data => {
      console.log(' BP Details', data.userdata);
      if (data.userdata) {
        this.employeeInfo = {

          employeeName: data.username.preferredlastname+", "+data.username.preferredfirstname,
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
        sessionStorage.setItem('warninginfo', 'false1')
        sessionStorage.setItem('warninginfosnow', 'false1')
        sessionStorage.setItem('identifier', '')
     //Data and routing 
     if (this.service == "jabber_new") {
      this.getDBdata()
     }
     if (this.service == "requests"  ) {      
        this.getSNOWdata() ;
             
     }
     if (this.service.includes("fixedphone")  ) {      
      this.getLocationdata();
           
   }
     if (this.service == "resources" || this.service == "jabber_delete" || this.service == "jabber_update" || this.service=='jabber_move') {      
      this.getDBdata() ;
          
   }
      //end data and routing
      }
      else {
        this.showloader = false
        this.notvalid = true

      }
       sessionStorage.setItem('title',this.title)
       sessionStorage.setItem('navpage',this.routingname)


      //this.isDataLoaded=true
    });

  }

  getSNOWdata():any {
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
       
        this.datasnow="yes"
        
        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
        
      }

      else {
        this.datasnow= "nodata";
        if(this.service=="jabber_new"||this.service=="jabber_move"){
          this.getLocationdata()
        }
        
        else{
        if (this.radioAction.toLowerCase() == "anotheremployee") {
          this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
        }
        else {
          this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
        }}
      }
    },
    (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.errorinfo=true;
      this.showloader =false;
    }
    )
    return this.datasnow;
  }
  getDBdata() {
    this.Db2Service.search_db2(this.employeeSerial, this.service).subscribe(data => {
      console.log(' db2 response', data);
      console.log(' db2 response', data.message.length);

      if (data.message.length > 0) {
        
        this.warninginfo = true
        sessionStorage.setItem('warninginfo', 'true1');
        for (var i = 0; i < data.message.length; i++) {
          this.itns[i] = data.message[i].IDENTIFIER.trim();
          if(this.service=='jabber_update'){
          if(data.message[i].VOICEMAIL==null)
          this.voice_mail[i]='NA'
          else
          this.voice_mail[i] = data.message[i].VOICEMAIL.trim();
          if(data.message[i].ATTRIBUTE5==null)
          this.cos[i] = 'NA';
          else
          this.cos[i] =  data.message[i].ATTRIBUTE5.trim();
        }
      }
       // this.identifier = data.message[0].IDENTIFIER
        if (this.service == "resources") {
          sessionStorage.setItem('identifier', JSON.stringify(data.message))
          this.datadb= "yes";
        }
        else { 
          sessionStorage.setItem('identifier', this.itns) ;
          sessionStorage.setItem('voice_mail', this.voice_mail) ;
          sessionStorage.setItem('cos', this.cos) ;     
        this.datadb= "yes";}
        if(this.service=="jabber_delete" || this.service=='jabber_update' || this.service=='jabber_move'){
          console.log("insidesnowdelete")
          this.getSNOWdata();
          this.datadb= "yes";
        }
        else{
        
        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
        }
      }
      else {
        console.log("nodb2data");
        this.datadb= "nodata";
        if(this.service=="jabber_new"){
          this.getSNOWdata()
        }
        else{
        if (this.radioAction.toLowerCase() == "anotheremployee") {
          this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
        }
        else {
          this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
        }}
      }
    },
    (error) => {                              //Error callback
      console.error('error caught in component'+error);
      this.errorinfo=true;
      this.showloader =false;
    })
    return this.datadb
  }
  getLocationdata() {
    this.cloudantservice.getlocationdetails(this.pcode).subscribe(data => {
      console.log('Response received navigation', data.locationdetails);
      if (this.service.includes('jabber')){
        if(this.pcode=='631'){
          var loc=this.employeeSerial.substr(6, 9)+"jlocations"
          console.log(loc)
          this.lookuploc=JSON.stringify((data.locationdetails[loc]))
        }
        else {
          if(data.locationdetails.ccodes){
            sessionStorage.setItem('ccodes',JSON.stringify(data.locationdetails.ccodes)) 
          }
       this.lookuploc=JSON.stringify(data.locationdetails.jlocations)}
      }
      else if(this.service.includes('fixed')){
        this.lookuploc=JSON.stringify(data.locationdetails.flocations)
        sessionStorage.setItem('fdevices',JSON.stringify(data.locationdetails.fdevices))
        sessionStorage.setItem('emmodels',JSON.stringify(data.locationdetails.emmodels))
        sessionStorage.setItem('cmmodels',JSON.stringify(data.locationdetails.cmmodels))
        sessionStorage.setItem('fpmodels',JSON.stringify(data.locationdetails.fpmodels))
      }
      else if(this.service.includes('fac')){
        this.lookuploc=JSON.stringify(data.locationdetails.faclocations)
      }
      else if(this.service.includes('special')){
        this.lookuploc=JSON.stringify(data.locationdetails.slocations)
      }
     // sessionStorage.setItem('locationdetails', JSON.stringify(data.locationdetails.jlocations));
     sessionStorage.setItem('locationdetails',this.lookuploc)
      if (this.radioAction.toLowerCase() == "anotheremployee") {
        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
      }
      else {
        this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
      }
    });

  }
  onRequestForChange() {
    this.empno = '';
    if (this.radioAction.toLowerCase() == "anotheremployee") {
      this.hideDisTextBox = true;
      this.hideDisserial = false;

    }
    else if (this.radioAction.toLowerCase() == "myself") {
      this.hideDisTextBox = false;
      this.hideDisserial = true;

    }

  }
  getRoutingname()
  {
    
  }
  getTitle(){
    //for title
    switch (this.service){
      case "jabber_new":
      this.title="Request new Jabber service";
      this.exitrouting='jabberservices';
      
      if(this.countrydetails.jnavpage=='AP'){
      this.routingname="/entrydetails";
    }else if(this.countrydetails.jnavpage=='EMEA'){
      this.routingname="/entrydetailsemea";
    }
    else if(this.countrydetails.jnavpage=='US'){
      this.routingname="/entrydetailsus";
    }
    else if(this.countrydetails.jnavpage=='LA'){
      this.routingname="/entrydetailsla";
    }
      this.reqname="-NS-";
      break;
      case "jabber_delete":
      this.title="Delete Jabber Request";
      this.routingname="/entrydetailsjd";
      this.exitrouting='jabberservices';
      this.reqname="-DS-";
      break;
      case "jabber_update":
      this.title="Update Jabber Request";
      this.exitrouting='jabberservices';
      this.reqname="-US-";
      if(this.countrydetails.jnavpage=='LA')
      this.routingname="/entrydetails_update_la";
      else if (this.countrydetails.jnavpage=='US')
      this.routingname="/entrydetails_update_us";
      else
      this.routingname="/entrydetailsiju";
      break;
      case "jabber_move":
      this.title="Move Jabber Request";
      this.exitrouting='jabberservices';
      this.routingname="/entrydetailsijm";
      this.reqname="-MS-";
      break;
      case "fixedphone_new":
      this.title="New Fixed Phone Request";
      this.routingname="/entrydetailsfn";
      this.exitrouting='fixedphoneservices';
      this.reqname="-NS-";
      break;
      case "resources":
        this.title="Resources";
        this.exitrouting='services';
        this.exitrouting='services';
        break;
        case "requests":
          this.title="Requests";
          this.exitrouting='services';
          break;
          case "approvalpending":
          this.title="Approvals";
          this.exitrouting='services';
          break;
      }
      }
  hidedata() {
    this.notvalid = false;
    this.errorinfo=false;
    
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

