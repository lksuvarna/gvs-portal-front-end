import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  radioAction:string = "";
  hideDisTextBox:boolean = false;
  hideDisserial:boolean = true;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  ccode='';
  submit(){
    this.router.navigate(['/employeeinfo']) 
  }
  ngOnInit(): void {

    this.radioAction = "mySelf";
    

    
    const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": true},            
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
    if(formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true){
    alert("Please enter serial number");
    }
    else if(formData.value.employeeSerial.length < 6  && this.hideDisTextBox == true){
      alert("Employee Serial Number should be of 6 characters");
    }
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

   
