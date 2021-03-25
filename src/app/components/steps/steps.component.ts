import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  isWarning = false
  isWarning1 = false
  isWarning2 = false
  isWarning3 = false

  @Input ('step') step : any;
  @Input ('isSelf') isSelf : any;
  @Input('hideSteps') set onChange (isWarning: any) {
    this.isWarning = isWarning
    if (this.step === 1 ){
      if(isWarning === true){
            this.isWarning1 = true
            this.isWarning2 = true
            this.isWarning3 = true
           } else {
            this.isWarning1 = false
            this.isWarning2 = false
            this.isWarning3 = false
           }
        }
  }

  @Output() previousStep = new EventEmitter<string>()

  reqFor : any
  servicesData : any = []
  pcode = '';
  service :any;
  isDisabled = false
  tooltip : any
  noTooltip : any
  changeClass1 = false
  changeClass2 = false
  changeClass3 = false
  changeClass4 = false

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
          {"name" : "STEP 4","tooltip" : "Review Details"},
          {"name" : "STEP 2","tooltip" : "Employee Resources Details"},
          {"name" : "STEP 3","tooltip" : "Employee Resources Details"},
          {"name" : "STEP 2","tooltip" : "Employee Requests Details"},
          {"name" : "STEP 3","tooltip" : "Employee Requests Details"},
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
    this.isWarning1 = false
   }

   if (this.step === 3 && this.isWarning === true){
    this.isWarning3 = true
    this.isWarning1 = false
   }

   if(this.service === 'jabber_delete' && this.step === 3 && this.isWarning === true){
    this.isWarning2 = true
    this.isWarning3 = true
    this.isWarning1 = false
   }

  if (this.step === 3 && this.isSelf === true){
    this.step = 2
  }

  if (this.step === 4 && this.isSelf === true){
    this.step = 3
  }

  }
  

  sendToEntryDetails () {
    this.previousStep.emit('true')
  }

} 
