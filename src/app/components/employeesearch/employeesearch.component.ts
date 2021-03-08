import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { bpservices } from '../../_services/bp.service';
import { Db2Service } from '../../_services/db2.service';
import { servicenowservice } from '../../_services/servicenow.service';
@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  radioAction:string = "";
  hideDisTextBox:boolean = false;
  hideDisserial:boolean = true;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute,private bpservices: bpservices, private Db2Service: Db2Service, private servicenowservice: servicenowservice) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  ccode='';
  pcode = '';
  fullName='';
  service='';
  backbutton: any;
  step: any;
  identifier: any;
  warninginfo = true;
  warninginfosnow = true;
  employeeInfo: any
  employeeSerial=''
  notvalid=false
  dataloading=false
  showloader=false
  ngOnInit(): void {
    this.showloader=false
    this.fullName=this.cookie.getCookie('user');
    this.ccode=this.cookie.getCookie('ccode');
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.pcode = params.country;
        this.service = params.service;
        console.log("navigation component" + this.pcode);
      })
      this.backbutton=sessionStorage.getItem('backbutton');
      this.step=sessionStorage.getItem('step');
      if(this.backbutton=='yes')
      {}else{
    this.radioAction = "mySelf"; }  

    
    const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": false},
          {"name" : "Jabber","routingname":"/services", "indented" : true, "highlighted": true},              
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
        ],
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    }

    onSubmit(formData:NgForm)
  {
    this.showloader=true
    if(this.radioAction.toLowerCase() == "anotheremployee"){
    if(formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true){
    alert("Please enter serial number");
    }
    else if(formData.value.employeeSerial.length < 6  && this.hideDisTextBox == true){
      alert("Employee Serial Number should be of 6 characters");
    }
    else{
      this.employeeSerial=formData.value.employeeSerial+this.pcode
    }
  }
  //for self
   else{
    this.employeeSerial=this.ccode
   }
//BP verification and getting data
    this.bpservices.bpdetails(this.employeeSerial).subscribe(data => {
      console.log(' BP Details', data.userdata);
      if(data.userdata){
      this.employeeInfo = {

        employeeName: data.username.callupname,
        jobResponsibility: data.username.jobresponsibilities,
        businessUnit: data.username.workloc,
        department: data.username.dept,
        country: data.username.co,
        email: data.username.preferredidentity
      }
      sessionStorage.setItem('employeeInfo',JSON.stringify(this.employeeInfo))
      sessionStorage.setItem('cnum',this.employeeSerial)
      this.warninginfo = false
    this.warninginfosnow=false
    sessionStorage.setItem('warninginfo', 'false1')
    sessionStorage.setItem('warninginfosnow', 'false1')
    sessionStorage.setItem('identifier', '')
    // Code to search Db2 for Jabber New
    this.Db2Service.search_db2(this.employeeSerial, 'jabber_new').subscribe(data => {
      console.log(' db2 response', data);
      console.log(' db2 response', data.message.length);

      if (data.message.length > 0) {
        this.warninginfo = true   
        sessionStorage.setItem('warninginfo', 'true1')  
        this.identifier = data.message[0].IDENTIFIER
        sessionStorage.setItem('identifier', this.identifier)
        this.router.navigate(['/employeeinfo'],{ queryParams: { country: this.pcode,service:this.service }}) ;
      }
      else {
        this.warninginfo = false 
        sessionStorage.setItem('warninginfo', 'false1')  
        //SNOW search for ongoin requests      
        this.servicenowservice.searchsnow(this.employeeSerial, this.service, 'IN-NS-'+this.employeeSerial.substr(0,6)).subscribe(data => {
          console.log(' snow response', data);
          console.log(' snow response', data.message.length);
          if (data.message.length > 0) {
            console.log(' snow response1', data.message.length);
            this.warninginfosnow=true  
            sessionStorage.setItem('warninginfosnow', 'true1')           
            this.identifier = data.message
            sessionStorage.setItem('identifier', this.identifier)
            this.router.navigate(['/employeeinfo'],{ queryParams: { country: this.pcode } }) ;
          }
         else{
          this.cloudantservice.getlocationdetails(this.pcode).subscribe(data => {
            console.log('Response received navigation', data.locationdetails);            
            sessionStorage.setItem('locationdetails', JSON.stringify(data.locationdetails.jlocations));            
            this.router.navigate(['/employeeinfo'],{ queryParams: { country: this.pcode,service:this.service } }) ;                  
          });
          
         }
        });
      }
    });
    
    
    }
    else{
      this.showloader=false
      this.notvalid=true
      
    }



      //this.isDataLoaded=true
    });
    
  }
    
   
  onRequestForChange(){

    if(this.radioAction.toLowerCase() == "anotheremployee"){
        this.hideDisTextBox = true;
      this.hideDisserial = false;

    }
    else if(this.radioAction.toLowerCase() == "myself")
    {
      this.hideDisTextBox = false;
      this.hideDisserial = true;

    }

  }
}

   
