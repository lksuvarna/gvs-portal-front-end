import { Component, Input, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  countryname:any;
  ccode='';
  cloudantData: any = []
   servicesData: any=[]
  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice) { }
  
  defaultNavClass = 'ds-panel-segment ds-text-uppercase'
  indentNavClass = ' ds-pad-l-2'
  activeNavClass = ' ds-nav-item ds-bg-blue-1'
  selectedItem: any
  onLoad = true
  dataNav:any = []

  @Input ('dataNav') dataNavParent : any
  @Input ('cloudantData') cloudantData1 : any

  getNavClass(i:any) {
    if(this.dataNav.lhs[i].indented && this.dataNav.lhs[i].highlighted ){
      if(this.onLoad){
        return this.defaultNavClass + this.indentNavClass + this.activeNavClass
      } else{
        return this.defaultNavClass + this.indentNavClass
      }
    } else if (this.dataNav.lhs[i].indented){
      return this.defaultNavClass + this.indentNavClass
    } else if (this.dataNav.lhs[i].highlighted) {
      if(this.onLoad){
        return this.defaultNavClass + this.activeNavClass
      } else{
        return this.defaultNavClass
      }
    } else {
      return this.defaultNavClass
    }
  }

  getNavActiveClass(i:any) {
    if(this.dataNav.lhs[i].indented){
      return this.defaultNavClass + this.indentNavClass + this.activeNavClass
    } else {
      return this.defaultNavClass + this.activeNavClass
    }
  }

  clickEvent(i: any) {
    this.onLoad = false
    this.selectedItem = i 
  }

  removeService(service:string){
    this.dataNav.lhs = this.dataNavParent.lhs.filter((item: any)=> item.name !== service)
  }

  removeServices() {
    console.log("In navigation component"+this.cloudantData.isreval)
    if(!this.cloudantData.isjabber){
      this.removeService('Jabber')
     } 

    if(!this.cloudantData.isfixedphone){
      this.removeService('Fixed Phone')
    } 

    if(!this.cloudantData.isfac){
     this.removeService('FAC Code')
    } 
    if(!this.cloudantData.isapproval){
      this.removeService('Approvals Pending')
     } 
 
    if(!this.cloudantData.isreval){
      this.removeService('Revalidation Pending')
     }
     
  }


  ngOnInit(): void {
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
  this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
     console.log('Response received', data.countrydetails.isspecial);
     this.countryname=data.countrydetails;      
   this.cloudantData  = {
     "code": this.ccode,
 "name": this.countryname.name,
 "isocode": this.countryname.isocode,
 "isjabber": this.countryname.isjabber,
 "isfixedphone": this.countryname.isfixphone,
 "isfac": this.countryname.isfac,
 "isspecial": this.countryname.isspecial,
 "isreval":true
   }
   this.dataNav = this.dataNavParent
    this.removeServices()
 });

    

  }

}
