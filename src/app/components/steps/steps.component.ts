import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

 
  @Input ('step') step : any;
  @Input ('isSelf') isSelf : any;
  @Input('hideSteps') isWarning : any;

  reqFor : any
  servicesData : any = []
  pcode = '';
  service :any;
  isDisabled = false
  isWarning2 = false
  isWarning3 = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.pcode = params.country;
      this.service=params.service;
      console.log("navigation component" + this.pcode);
    })
    
  const servicesData = { 
    "data": [
      {    
        "steps": [
          {"name" : "STEP 1","tooltip" : "Employee Search"},            
          {"name" : "STEP 2","tooltip" : "Employee Information"},
          {"name" : "STEP 2","tooltip" : "Employee Entry Details"},
          {"name" : "STEP 3","tooltip" : "Employee Entry Details"},
          {"name" : "STEP 3","tooltip" : "Review Details"},
          {"name" : "STEP 4","tooltip" : "Review Details"}
        ]  
      }
    ]
  }

  this.servicesData = servicesData.data[0].steps

  if (!(this.step === 1)){
    if(this.isSelf === 'myself'){
      this.isSelf = true
    } else{
      this.isSelf = false
    }
  }

  if (this.step === 2 && this.isWarning === true){
    this.isWarning2 = true
    this.isWarning3 = true
    this.isWarning = false
   }

   if (this.step === 3 && this.isWarning === true){
    this.isWarning3 = true
    this.isWarning = false
   }

  if (this.step === 3 && this.isSelf === true){
    this.step = 2
  }

  if (this.step === 4 && this.isSelf === true){
    this.step = 3
  }

  }
}
