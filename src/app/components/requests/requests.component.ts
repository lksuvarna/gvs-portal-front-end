import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { servicenowservice } from '../../_services/servicenow.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {



  DisplayModel = 'none';
  allComments: any = [];

  constructor(private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private route: ActivatedRoute, private servicenowservice: servicenowservice) { }

  servicesData: any = [];
  requests: any = [];
  // requests = [
  //  {fl_typesnow:"GVS FAC Code / IDD PIN - Create",fl_date_submittedsnow:"01/06/2021",fl_statussnow:"Completed",fl_ReqNumbersnow:"IN-NS-06685M-5121",fl_reqcomments:"none"},
  // ];
  countryname: any;
  countrydetails: any;
  data1: any;
  snowdata: any;
  display: any;
  approver: any = [];
  i: any;
  empserial: any;
  errorinfo=false;
  comments: any = [];
  snowdataarray: any = [];
  snowdataarray1: any = [];
  commentsresult: any = [];
  lastcomment:any = [];
  stage:any;
  reqFor : any
  sessionwarninginfosnow:any;
  warninginfosnowreq=false

  hideSteps = true
  openNav(comments: any) {
    this.DisplayModel = 'block';
    console.log("popup"+comments)    
    //this.allComments = comments;
    this.allComments.push(comments)
  }
  closeNav() {
    this.allComments=[];
    this.DisplayModel = 'none';
  }
  ngOnInit(): void {
   // window.addEventListener("keyup", disableF5);

   // window.addEventListener("keydown", disableF5);
    this.display = false
    this.snowdata = sessionStorage.getItem('identifier');
    this.empserial = sessionStorage.getItem('empserial');
    this.sessionwarninginfosnow=sessionStorage.getItem('warninginfosnow')
    this.reqFor = sessionStorage.getItem('radioAction')
    if (this.sessionwarninginfosnow =='false1' ){
      this.warninginfosnowreq = true    
      this.display = true
     }
     else{
    console.log(this.snowdata.length)
    var parsed = JSON.parse(JSON.stringify(JSON.parse(this.snowdata)));
    this.snowdata = parsed;
    
    console.log(this.snowdata.length)
    for (this.i = 0; this.i < this.snowdata.length; this.i++) {
     this.stage='';
     this.stage=this.snowdata[this.i].stage.toLowerCase();
     
    //  if ((this.stage==="waiting for approval" || this.stage==="rejected") && this.stage!=="closed incomplete") {
        this.servicenowservice.searchsnowcoments(this.empserial, "snow_approver_requests", '-NS-' + this.empserial.substr(0, 6), this.snowdata[this.i].number).subscribe(data => {
         
          this.approver.push("("+data.message[0]['approver.name']+")");
        
          
        },
        (error) => {                              //Error callback
         console.error('error caught in component'+error);
         this.errorinfo=true;
       })
      //}
     //   else{
         // this.approver.push();
     //   }
        this.servicenowservice.searchsnowcoments(this.empserial, "snow_comments", '-NS-' + this.empserial.substr(0, 6), this.snowdata[this.i].number).subscribe(data => {
          console.log(' snow response', data);
          console.log(' snow response', data.message.results.length);
          //console.log(' snow response', data.message.results);  
          console.log(' snow response ccccc');
          var j, num, dis, cre, vari
          j = this.i;
          //num=this.snowdata[this.i].number
          if (data.message.results.length == 0) {
            this.snowdataarray.push("none")
            this.lastcomment.push("none")
            this.display = true
          }
          else {
            this.snowdataarray.push(data.message.results)
            this.snowdataarray1=data.message.results.split("UTC")          
            this.lastcomment.push(this.snowdataarray1[this.snowdataarray1.length-1])
            this.display = true
          }
        },
        (error) => {                              //Error callback
         console.error('error caught in component'+error);
         this.errorinfo=true;
       })
      
    }}

    const servicesData = {
      "data": [
        {          
          "services": ["Jabber", "Fixed Phone", "FAC Code / IDD PIN", "Special Request"],
          "step" : 3,
        }
      ]
    }
    this.servicesData = servicesData.data[0];
    function disableF5(e:any) {

      if (((e.which || e.keyCode) == 116)|| ((e.which || e.keyCode) == 17) || ((e.which || e.keyCode) == 82)|| ((e.which || e.keyCode) == 123)|| ((e.which || e.key) == 'ctrl+R')|| (e.which || e.keyCode) == 82 ) e.preventDefault(); 

    

   };


  }

}