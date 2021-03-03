import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from  '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  radioAction:string = "";
  hideDisTextBox:boolean = false;
  hideDisserial:boolean = true;

  constructor(private router:Router,private cookie: CookieHandlerService,private cloudantservice:cloudantservice, private route: ActivatedRoute) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  ccode='';
  pcode = '';
  
  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.pcode = params.country;
        console.log("navigation component" + this.pcode);
      })
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
    if(this.radioAction.toLowerCase() == "anotheremployee"){
    if(formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true){
    alert("Please enter serial number");
    }
    else if(formData.value.employeeSerial.length < 6  && this.hideDisTextBox == true){
      alert("Employee Serial Number should be of 6 characters");
    }
    sessionStorage.setItem('cnum',formData.value.employeeSerial)
    this.router.navigate(['/employeeinfo'],{ queryParams: { country: this.pcode } }) ;
  }
    else{
     // if(this.radioAction.toLowerCase() == "anotheremployee"){
      sessionStorage.setItem('cnum','01241O')
    //  }
      //else{
      //  sessionStorage.setItem('cnum',formData.value.employeeSerial)
     // }
      this.router.navigate(['/employeeinfo'],{ queryParams: { country: this.pcode } }) ;
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

   
