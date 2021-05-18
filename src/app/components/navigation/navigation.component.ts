import { Component, Input, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateConfigService } from 'src/app/_services/translate-config.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  countryname: any;
  ccode = '';
  pcode = '';
  service : any;
  cloudantData: any = []
  servicesData: any = []
  pcountrydetails:any
  constructor(private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private route: ActivatedRoute, private translateconfigservice : TranslateConfigService) { }

  defaultNavClass = 'ds-panel-segment ds-text-uppercase'
  indentNavClass = ' ds-pad-l-2'
  activeNavClass = ' ds-nav-item ds-bg-blue-1'
  selectedItem: any
  onLoad = true
  dataNav: any = []
  dataNav1: any = []
  dataNav123: any
  dataNavParent:any
  countryroute :any
  countrydetails:any
  parcountrydetails:any
  fixphoneVisibility:any;
  loggedinuser:any
  serhl:any;jhl:any;fhl:any;fachl:any;mhl:any;reqhl:any;reshl:any;apphl:any;pnshl:any;sphl:any;
  serin:any;jin:any;fin:any;facin:any;min:any;reqin:any;resin:any;appin:any;pnsin:any;spin :any;
  @Input('dataNav') dataNavParent1: any
  @Input('cloudantData') cloudantData1: any
   
  getNavClass(i: any) {
    if (this.dataNav123.data[0].lhs[i].indented && this.dataNav123.data[0].lhs[i].highlighted) {
      if (this.onLoad) {
        return this.defaultNavClass + this.indentNavClass + this.activeNavClass
      } else {
        return this.defaultNavClass + this.indentNavClass
      }
    } else if (this.dataNav123.data[0].lhs[i].indented) {
      return this.defaultNavClass + this.indentNavClass
    } else if (this.dataNav123.data[0].lhs[i].highlighted) {
      if (this.onLoad) {
        return this.defaultNavClass + this.activeNavClass
      } else {
        return this.defaultNavClass
      }
    } else {
      return this.defaultNavClass
    }
  }
  getNavActiveClass(i: any) {
    if (this.dataNav123.data[0].lhs[i].indented) {
      return this.defaultNavClass + this.indentNavClass + this.activeNavClass
    } else {
      return this.defaultNavClass + this.activeNavClass
    }
  }

  clickEvent(i: any) {
    this.onLoad = false
    this.selectedItem = i
  }

  removeService(service: string) {
    this.dataNav123.data[0].lhs = this.dataNav123.data[0].lhs.filter((item: any) => item.name !== service)
  }

  removeServices() {
    console.log("In navigation component" + this.cloudantData.isreval)
    if (!this.cloudantData.isjabber) {
      this.removeService('Jabber')
    }

    if (!this.cloudantData.isfixedphone) {
      this.removeService('Fixed Phone')
    }
    if (!this.cloudantData.isspecial) {
      this.removeService('Special Request')
    }
    if (!this.cloudantData.isfac) {
      this.removeService('FAC Code')
    }
    if (!this.cloudantData.ismobile) {
      this.removeService('Mobile')
    }
    if (!this.cloudantData.isapproval) {
      this.removeService('Approvals Pending')
    }

    if (!this.cloudantData.isreval) {
      this.removeService('Revalidation Pending')
    }
    if (!this.cloudantData.isphonenumbersearch) {
      this.removeService('Phone Number Search')
    }

  }


  ngOnInit(): void {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.service = params.service;
        this.pcode = params.country;
        console.log("navigation component" + this.pcode);

        if(sessionStorage.getItem('countrydetails')==undefined){
  
        } else {
          this.countrydetails = sessionStorage.getItem('countrydetails')
          this.parcountrydetails = JSON.parse(this.countrydetails);
          this.loggedinuser = this.cookie.getCookie('ccode')
          //ACL for Fixed Phone Services - starts
          if(this.parcountrydetails.fixphone_visibility == false) { //Add country pcode here if ACL Applicable
            if(this.parcountrydetails.auth_fixphone.includes(this.loggedinuser)) {
            this.fixphoneVisibility = true;
            } else {
              this.fixphoneVisibility = false;
            }
          } else {
            this.fixphoneVisibility = this.parcountrydetails.isfixphone;
          }
        }
      this.serhl=false;this.jhl=false;this.fhl=false;this.fachl=false;this.mhl=false;this.reqhl=false;this.reshl=false;this.apphl=false;this.pnshl=false,this.sphl=false;
      this.serin=false;this.jin=false;this.fin=false;this.facin=false;this.min=false;this.reqin=false;this.resin=false;this.appin=false;this.pnsin=false,this.spin=false;
      
      if (this.service=="services")
      {
        this.serhl=true
      }
      if ((this.service).includes("jabber"))
      {        
        this.jin=true
        this.jhl=true
        this.fin=true
      }
      if ((this.service).includes("fixedphone"))
      {        
        this.fin=true
        this.fhl=true
        this.jin=true
        this.facin=true
      }
      
      if (this.service.includes("fac"))
      {        
        this.facin=true
        this.fachl=true
        this.fin=true;
      }

      if (this.service.includes("mobile"))
      {        
        this.min=true
        this.mhl=true
        this.fin=true;
      }


      if (this.service.includes("specialrequest"))
      {        
        this.facin=true
        this.min=true
        this.fin=true;
        this.sphl=true;
      }
      
      if ((this.service).includes("requests"))
      {        
        this.reqhl=true
        this.fin=true
        
      }
      if ((this.service).includes("resources"))
      {        
        this.reshl=true
        this.fin=true
        
      }

      if ((this.service).includes("approvalpending"))
      {        
        this.apphl=true
        this.fin=true
        
      }
      if ((this.service).includes("phone_search"))
      {        
        this.pnshl=true
        this.fin=true
        
      }


      if (this.service=="services")
      {
        this.dataNav123 = { 
          "data": [
            {    
              "lhs": [
                {"name" : "Services","routingname":"/services", "indented" : this.serin, "highlighted": this.serhl,"param":"services"},
               // {"name" : "Jabber","routingname":"/services", "indented" : this.jin, "highlighted": this.jhl},              
                {"name" : "Approvals Pending","routingname":"/approvalpending", "indented" : this.appin, "highlighted": this.apphl,"param":"approvalpending"},
                {"name" : "Revalidation Pending","routingname":"/revalidationpending", "indented" : false, "highlighted": false,"param":"revalidationpending"},
                {"name" : "Phone Number Search","routingname":"/extensionsummaryau", "indented" : this.pnsin, "highlighted": this.pnshl,"param":"phone_search"},
                {"name" : "Resources","routingname":"/employeesearchres", "indented" : this.resin, "highlighted": this.reshl,"param":"resources"},
                {"name" : "Requests","routingname":"/employeesearchreq", "indented" : this.reqin, "highlighted": this.reqhl,"param":"requests"}
              ],
              "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request","Mobile"], 
              "step" : 1,
            }
          ]
        }}
      else{
      this.dataNav123 = { 
        "data": [
          {    
            "lhs": [
              {"name" : "Services","routingname":"/services", "indented" : this.serin, "highlighted": this.serhl,"param":"services"},

              {"name" : "Jabber","routingname":"/jabberservices", "indented" : true, "highlighted": this.jhl,"param":"jabberservices"}, 
              {"name" : "FAC Code","routingname":"/facservices", "indented" : true, "highlighted": this.fachl,"param":"facservices"},  
              {"name" : "Mobile","routingname":"/mobileservices", "indented" : true, "highlighted": this.mhl,"param":"mobileservices"},                        

               {"name" : "Fixed Phone","routingname":"/fixedphoneservices", "indented" : this.fin, "highlighted": this.fhl,"param":"fixedphoneservices"},            
               {"name" : "Special Request","routingname":"/employeesearch", "indented" : true, "highlighted": this.sphl,"param":"specialrequest"},            
              {"name" : "Approvals Pending","routingname":"/approvalpending", "indented" : this.appin, "highlighted": this.apphl,"param":"approvalpending"},
              {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false,"param":"services"},
              {"name" : "Phone Number Search","routingname":"/extensionsummaryau", "indented" : this.pnsin, "highlighted": this.pnshl,"param":"phone_search"},
              {"name" : "Resources","routingname":"/employeesearchres", "indented" : this.resin, "highlighted": this.reshl,"param":"resources"},
              {"name" : "Requests","routingname":"/employeesearchreq", "indented" : this.reqin, "highlighted": this.reqhl,"param":"requests"}
            ],
            "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request","Mobile"], 
            "step" : 1,
          }
        ]
      }}
    this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
    this.countryroute=sessionStorage.getItem('countryroute')
    if (this.pcode== this.countryroute) {
      this.pcountrydetails=sessionStorage.getItem('countrydetails')
            console.log("navigationsession storageif" + JSON.parse(this.pcountrydetails).code)
      this.countryname = JSON.parse(this.pcountrydetails)
      this.cloudantData = {
        "code": this.ccode,
        "name": this.countryname.name,
        "isocode": this.countryname.isocode,
        "isjabber": this.countryname.isjabber,
        "isfixedphone": this.fixphoneVisibility,
        "isfac": this.countryname.isfac,
        "ismobile": this.countryname.ismobile,
        "isspecial": this.countryname.isspecial,
        "isreval": this.countryname.isreval,
        "isapproval":this.countryname.isapproval,
        "isjabbernew":this.countryname.isjabbernew,
        "isjabberdelete":this.countryname.isjabberdelete,
        "isjabbermove":this.countryname.isjabbermove,
        "isjabberupdate":this.countryname.isjabberupdate,
        "isphonenumbersearch":this.countryname.isphonenumbersearch

       
      } 
      //for lhs
      this.dataNavParent=this.dataNav123
      //end for lhs  
      this.dataNav123 = this.dataNav123
      this.dataNavParent=this.dataNav123
      this.removeServices()
      
    }
    else {
      console.log("navigation componentelse" + this.ccode);
      this.loggedinuser = this.cookie.getCookie('ccode');
      this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
        console.log('Response received navigation', data.countrydetails.isspecial);
        this.countryname = data.countrydetails;
        sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
        sessionStorage.setItem('countryroute', this.pcode);
        if(this.countryname.fixphone_visibility == false) { //Add country pcode here if ACL Applicable
          if(this.countryname.auth_fixphone.includes(this.loggedinuser)) {
          this.fixphoneVisibility = true;
          } else {
            this.fixphoneVisibility = false;
          }
        } else {
          this.fixphoneVisibility = this.parcountrydetails.isfixphone;
        }
        this.cloudantData = {
        "code": this.pcode,
        "name": this.countryname.name,
        "isocode": this.countryname.isocode,
        "isjabber": this.countryname.isjabber,
        "isfixedphone": this.fixphoneVisibility,
        "isfac": this.countryname.isfac,
        "ismobile": this.countryname.ismobile, 
        "isspecial": this.countryname.isspecial,          
        "isreval": this.countryname.isreval,
        "isapproval":this.countryname.isapproval,
        "isjabbernew":this.countryname.isjabbernew,
        "isjabberdelete":this.countryname.isjabberdelete,
        "isjabbermove":this.countryname.isjabbermove,
        "isjabberupdate":this.countryname.isjabberupdate,
        "isphonenumbersearch":this.countryname.isphonenumbersearch
        }   
        this.dataNavParent=this.dataNav123
      //end for lhs
      this.dataNav123 = this.dataNav123
      this.dataNavParent=this.dataNav123
      this.removeServices()     
      });
      //for lhs
      
      
    }

  })
  }



}


