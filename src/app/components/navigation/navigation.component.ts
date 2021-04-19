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
  serhl:any;jhl:any;fhl:any;fachl:any;reqhl:any;reshl:any;
  serin:any;jin:any;fin:any;facin:any;reqin:any;resin:any;
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
    if (!this.cloudantData.isapproval) {
      this.removeService('Approvals Pending')
    }

    if (!this.cloudantData.isreval) {
      this.removeService('Revalidation Pending')
    }

  }


  ngOnInit(): void {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.service = params.service;
        this.pcode = params.country;
        console.log("navigation component" + this.pcode);
     
      this.serhl=false;this.jhl=false;this.fhl=false;this.fachl=false;this.reqhl=false;this.reshl=false;
      this.serin=false;this.jin=false;this.fin=false;this.facin=false;this.reqin=false;this.resin=false;
      
      if (this.service=="services")
      {
        this.serhl=true
      }
      if ((this.service).includes("jabber"))
      {        
        this.jin=true
        this.jhl=true
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
      }
      
      if ((this.service).includes("requests"))
      {        
        this.reqhl=true
        
      }
      if ((this.service).includes("resources"))
      {        
        this.reshl=true
        
      }
      if (this.service=="services"||this.service=="requests"||this.service=="resources")
      {
        this.dataNav123 = { 
          "data": [
            {    
              "lhs": [
                {"name" : "Services","routingname":"/services", "indented" : this.serin, "highlighted": this.serhl,"param":"services"},
               // {"name" : "Jabber","routingname":"/services", "indented" : this.jin, "highlighted": this.jhl},              
                {"name" : "Approvals Pending","routingname":"/approvalpending", "indented" : false, "highlighted": false,"param":"services"},
                {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false,"param":"services"},
                {"name" : "Resources","routingname":"/employeesearch", "indented" : this.resin, "highlighted": this.reshl,"param":"resources"},
                {"name" : "Requests","routingname":"/employeesearch", "indented" : this.reqin, "highlighted": this.reqhl,"param":"requests"}
              ],
              "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
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

               {"name" : "Fixed Phone","routingname":"/fixedphoneservices", "indented" : this.fin, "highlighted": this.fhl,"param":"fixedphoneservices"},            

              {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false,"param":"services"},
              {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false,"param":"services"},
              {"name" : "Resources","routingname":"/employeesearch", "indented" : this.resin, "highlighted": this.reshl,"param":"resources"},
              {"name" : "Requests","routingname":"/employeesearch", "indented" : this.reqin, "highlighted": this.reqhl,"param":"requests"}
            ],
            "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
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
        "isfixedphone": this.countryname.isfixphone,
        "isfac": this.countryname.isfac,
        "isspecial": this.countryname.isspecial,
        "isreval": this.countryname.isreval,
        "isapproval":this.countryname.isapproval,
        "isjabbernew":this.countryname.isjabbernew,
        "isjabberdelete":this.countryname.isjabberdelete,
        "isjabbermove":this.countryname.isjabbermove,
        "isjabberupdate":this.countryname.isjabberupdate,

       
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
      this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
        console.log('Response received navigation', data.countrydetails.isspecial);
        this.countryname = data.countrydetails;
        sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
        sessionStorage.setItem('countryroute', this.pcode);
        this.cloudantData = {
          "code": this.pcode,
          "name": this.countryname.name,
          "isocode": this.countryname.isocode,
          "isjabber": this.countryname.isjabber,
          "isfixedphone": this.countryname.isfixphone,
          "isfac": this.countryname.isfac,
          "isspecial": this.countryname.isspecial,          
          "isreval": this.countryname.isreval,
        "isapproval":this.countryname.isapproval,
        "isjabbernew":this.countryname.isjabbernew,
        "isjabberdelete":this.countryname.isjabberdelete,
        "isjabbermove":this.countryname.isjabbermove,
        "isjabberupdate":this.countryname.isjabberupdate
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


