import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topcountryframe',
  templateUrl: './topcountryframe.component.html',
  styleUrls: ['./topcountryframe.component.css']
})
export class TopcountryframeComponent implements OnInit {

  constructor(private router: Router,private cloudantservice:cloudantservice,private cookie: CookieHandlerService, private route: ActivatedRoute) { }
  countryname:any;
  ccode='';
  pcode = '';
  pcountrydetails:any
  countryroute:any
  service:any;
  pagedisplay:any;
  routingservices: any = ['services','jabberservices','fixedphoneservices','facservices','jabber_new','jabber_delete','jabber_update','jabber_move','fixedphone_new','fixedphone_update','fixedphone_delete','fac_new','fac_update','fac_reset','fac_deactivate','requests','resources','approvalpending']
  ngOnInit(): void {
   
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.service=params.service;
        this.pcode = params.country;
        console.log("topcountry component" + this.pcode);
       // console.log("topcountry component" + this.route.component);
      
      this.countryroute=sessionStorage.getItem('countryroute')
    this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
    if(!this.routingservices.includes(this.service) )
      {
        sessionStorage.setItem('pagedisplay','pagenotfound')
        this.router.navigate(['**'], {
        //  queryParams: {}
       });
       
      } 
      else{
        sessionStorage.setItem('pagedisplay','page')
       if( this.router.url.includes('employeeinfo') || this.router.url.includes('entrydetails') || this.router.url.includes('requests?')|| this.router.url.includes('resources?')){
         if(!sessionStorage.getItem('employeeInfo')){
          sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
          //  queryParams: {}
         });
         }
       }
      }   
    if (this.pcode== this.countryroute) {
      this.pcountrydetails=sessionStorage.getItem('countrydetails')
            console.log("topcountrysession storageif" + JSON.parse(this.pcountrydetails).code)
      this.countryname = JSON.parse(this.pcountrydetails)
    }
    else{
      console.log("topcountrysession storageelse" + this.pcode)
    this.cloudantservice.getcountrydetails(this.pcode).subscribe(data=> {
     
      if(data.countrydetails=='no data')
      {
        sessionStorage.setItem('pagedisplay','pagenotfound')
        this.router.navigate(['**'], {
       //   queryParams: {}
       });
       
      }
      else{
        sessionStorage.setItem('pagedisplay','page')
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
      sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
      sessionStorage.setItem('countryroute', this.pcode);}
     });
    }
  })
  
  if((this.service!='jabber_new') && (this.service!='jabber_delete')){
    sessionStorage.removeItem('cache');
  }

  }

}
