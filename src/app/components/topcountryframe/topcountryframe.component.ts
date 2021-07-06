import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {TranslateConfigService} from '../../_services/translate-config.service';


@Component({
  selector: 'app-topcountryframe',
  templateUrl: './topcountryframe.component.html',
  styleUrls: ['./topcountryframe.component.css']
})
export class TopcountryframeComponent implements OnInit {

  constructor(private router: Router,private cloudantservice:cloudantservice,private cookie: CookieHandlerService, private route: ActivatedRoute, private translateconfigservice : TranslateConfigService) { }
  countryname:any;
  ccode='';
  pcode = '';
  pcountrydetails:any
  countryroute:any
  service:any;
  pagedisplay:any;
  currentLang :any;
  translatecountryname1 :boolean =false;
  cache : any;

  
  routingservices: any = ['services','jabberservices','fixedphoneservices','facservices','mobileservices','mobile_new','jabber_new','jabber_delete','jabber_update','jabber_move','fixedphone_new','fixedphone_update','fixedphone_delete','fac_new','fac_update','fac_reset','fac_delete','requests','resources','approvalpending','revalidationpending','phone_search', 'specialrequest']


  changeLanguage(type :string){
    this.translateconfigservice.changeLanguage(type);
    //this.currentLang = localStorage.setItem("currentLang", type);
  }

  
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
    if (this.pcode=== this.countryroute) {
        
      this.pcountrydetails=sessionStorage.getItem('countrydetails')
            console.log("topcountrysession storageif" + JSON.parse(this.pcountrydetails).code)
      this.countryname = JSON.parse(this.pcountrydetails)
      if (this.countryname.isLtFrench && this.service == 'services'){
          this.translatecountryname1 = true;
        }  
        else{
          this.translatecountryname1 = false;
        }  
        if(this.service.includes('jabberservices')){
          if ( this.countryname.jservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('fixedphoneservices')){
          if ( this.countryname.fservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('facservices')){
          if ( this.countryname.facservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }

        if(this.service.includes('mobileservices')){
          if ( this.countryname.mobileservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('revalidationpending')){
          if ( this.countryname.isreval){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }

        if(this.service.includes('specialrequest')){
          if ( this.countryname.isspecial){}

          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }

        if(this.service.includes('jabber_')){
           
          if ( this.countryname.jservices &&this.countryname.jservices.includes(this.service.replace('jabber_','')) ){    
          }
         
        else{
          sessionStorage.setItem('pagedisplay','pagenotfound')
        this.router.navigate(['**'], {
       //   queryParams: {}
       });
        }}
        if(this.service.includes('fixedphone_')){
         
          if ( this.countryname.fservices &&this.countryname.fservices.includes(this.service.replace('fixedphone_','')) ){    
          }
         
        else{
          sessionStorage.setItem('pagedisplay','pagenotfound')
        this.router.navigate(['**'], {
       //   queryParams: {}
       });
        }}
        if(this.service.includes('fac_')){
         
          if ( this.countryname.facservices && this.countryname.facservices.includes(this.service.replace('fac_','')) ){    
          }
         
        else{
          sessionStorage.setItem('pagedisplay','pagenotfound')
        this.router.navigate(['**'], {
       //   queryParams: {}
       });
        }}
        if(this.service.includes('mobile_')){
         
          if ( this.countryname.mobileservices && this.countryname.mobileservices.includes(this.service.replace('mobile_','')) ){    
          }
         
        else{
          sessionStorage.setItem('pagedisplay','pagenotfound')
        this.router.navigate(['**'], {
       //   queryParams: {}
       });
        }}
        
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
      
      if (this.countryname.isLtFrench && this.service == 'services'){
          this.translatecountryname1 = true;
        }  
        else{
          this.translatecountryname1 = false;
        } 
        if(this.service.includes('jabberservices')){
          if ( this.countryname.jservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('fixedphoneservices')){
          if ( this.countryname.fservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('facservices')){
          if ( this.countryname.facservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }

        if(this.service.includes('mobileservices')){
          if ( this.countryname.mobileservices){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('revalidationpending')){
          if ( this.countryname.isreval){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
        if(this.service.includes('specialrequest')){
          if ( this.countryname.isspecial){}
          else{sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });}
        }
          if(this.service.includes('jabber_')){
           
            if ( this.countryname.jservices &&this.countryname.jservices.includes(this.service.replace('jabber_','')) ){    
            }
           
          else{
            sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });
          }}
          if(this.service.includes('fixedphone_')){
           
            if ( this.countryname.fservices &&this.countryname.fservices.includes(this.service.replace('fixedphone_','')) ){    
            }
           
          else{
            sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });
          }}
          if(this.service.includes('fac_')){
           
            if (this.countryname.facservices && this.countryname.facservices && this.countryname.facservices.includes(this.service.replace('fac_','')) ){    
            }
           
          else{
            sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });
          }}
          if(this.service.includes('mobile_')){
           
            if (this.countryname.mobileservices && this.countryname.mobileservices && this.countryname.mobileservices.includes(this.service.replace('mobile_','')) ){    
            }
           
          else{
            sessionStorage.setItem('pagedisplay','pagenotfound')
          this.router.navigate(['**'], {
         //   queryParams: {}
         });
          }}
     });
    }
  })
  

  if((this.service!='jabber_new') && (this.service!='jabber_delete') && (this.service!='jabber_update') && (this.service!='jabber_move') && (this.service!='fixedphone_new') && (this.service!='fixedphone_delete') &&  (this.service!='fixedphone_update') && (this.service!='fac_new') && (this.service!='fac_update') && (this.service!='specialrequest')&& (this.service!='mobile_new')){
    
    console.log("Remove cache inside main block");
    sessionStorage.removeItem('cache');
  }

  if(this.service!='mobile_new'){
    sessionStorage.removeItem('moback')
  }
  if(this.service=='specialrequest'){
 
    this.cache=sessionStorage.getItem('cache');
    this.cache=JSON.parse(this.cache);
    if(this.cache != null){
    console.log("Special Req "+this.cache);
    if((this.cache.setflag) || (this.cache.setflag==undefined)){

    console.log("Remove cache second main block");
      sessionStorage.removeItem('cache');
    }
    console.log("Special Req "+this.cache);
  }
  }
  

  }

}
