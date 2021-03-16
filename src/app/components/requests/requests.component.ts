import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import {servicenowservice} from '../../_services/servicenow.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  
  
  DisplayModel= 'none';
  allComments = [];

  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private route: ActivatedRoute,private servicenowservice:servicenowservice) { }
  
  servicesData: any = [];
  requests:any=[];
 // requests = [
  //  {fl_typesnow:"GVS FAC Code - Create",fl_date_submittedsnow:"01/06/2021",fl_statussnow:"Completed",fl_ReqNumbersnow:"IN-NS-06685M-5121",fl_reqcomments:"none"},
  // ];
  countryname:any;
  countrydetails:any;
  data1:any;
  snowdata:any;
  display:any;
  i:any;
  empserial :any;
  comments : any=[];
  snowdataarray:any=[];
  commentsresult:any=[];
  openNav(comments:any) {
    this.DisplayModel = 'block';
    this.allComments = comments;
    this.allComments
  }
  closeNav() {
    this.DisplayModel = 'none';
  }
  ngOnInit(): void {  
    this.display=false 
    this.snowdata=sessionStorage.getItem('identifier');
    this.empserial=sessionStorage.getItem('empserial')
    console.log(this.snowdata.length)
    var parsed = JSON.parse(JSON.stringify(JSON.parse(this.snowdata)));
    this.snowdata = parsed;
    
    
    console.log(this.snowdata.length)
    for(  this.i=0;this.i<this.snowdata.length;this.i++){
      
    
      
      this.servicenowservice.searchsnowcoments(this.empserial, "snow_comments", '-NS-'+this.empserial.substr(0,6),this.snowdata[this.i].number).subscribe(data => {
        console.log(' snow response', data);
        console.log(' snow response', data.message.results.length);           
        //console.log(' snow response', data.message.results);  
        console.log(' snow response ccccc');  
        var j,num,dis,cre,vari
        j=this.i;
        //num=this.snowdata[this.i].number
          if(data.message.results.length==0){
            this.snowdataarray.push("none")
              
          }
          else{
            this.snowdataarray.push(data.message.results)
          }
          
          console.log(this.i)
          console.log("snowarrraylength"+this.snowdataarray)
          //var parsed1 = JSON.parse(JSON.stringify(JSON.parse(this.snowdataarray)));
    //this.snowdataarray = parsed1;
          //this.display=true
          if(this.i=3){
          //console.log("snowdataarray"+this.snowdataarray.reqnumber)
          
          this.display=true}
        
        
        
      })
      
      
    
     }
     
    const servicesData = { 
    "data": [
      {    
        
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
      }
    ]
  }
    
    this.servicesData = servicesData.data[0];

    

}

}