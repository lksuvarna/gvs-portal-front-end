import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  tooltip : any
  pcountrydetails:any;
  display=false
  @Output() previousStep = new EventEmitter<string>()

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
  mainConfiguration :any;
  serhl:any;jhl:any;fhl:any;fachl:any;mhl:any;reqhl:any;reshl:any;apphl:any;pnshl:any;sphl:any;revalhl:any;
  serin:any;jin:any;fin:any;facin:any;min:any;reqin:any;resin:any;appin:any;pnsin:any;spin :any;revalin:any;
  @Input('dataNav') dataNavParent1: any
  @Input('cloudantData') cloudantData1: any

  getNavTitle(tooltip : string){
    this.mainConfiguration = this.translateconfigservice.readConfigFile();
    return this.mainConfiguration.lhs[tooltip]
    }
   
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
    if(this.service == 'phone_search') {
      this.previousStep.emit('true');
    }
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
      this.removeService('FAC Code / IDD PIN')
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
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.countryroute=sessionStorage.getItem('countryroute')
        this.serhl=false;this.jhl=false;this.fhl=false;this.fachl=false;this.mhl=false;this.reqhl=false;this.reshl=false;this.apphl=false;this.pnshl=false,this.sphl=false,this.revalhl=false;
      this.serin=false;this.jin=false;this.fin=false;this.facin=false;this.min=false;this.reqin=false;this.resin=false;this.appin=false;this.pnsin=false,this.spin=false,this.revalin=false;
     
        
          
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
      if ((this.service).includes("revalidationpending"))
      {        
        this.revalhl=true
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
                {"name" : "Services","routingname":"/services", "indented" : this.serin, "highlighted": this.serhl,"param":"services","tooltip":"To check all available services"},
               // {"name" : "Jabber","routingname":"/services", "indented" : this.jin, "highlighted": this.jhl},              
               {"name" : "Jabber","routingname":"/jabberservices", "indented" : true, "highlighted": false,"param":"jabberservices","tooltip":"IBM office telephone number"}, 
               {"name" : "FAC Code / IDD PIN","routingname":"/facservices", "indented" : true, "highlighted": false,"param":"facservices","tooltip":"Fac services"},  
               {"name" : "Mobile","routingname":"/mobileservices", "indented" : true, "highlighted": false,"param":"mobileservices","tooltip":"Mobile services"},                       
 
               {"name" : "Fixed Phone","routingname":"/fixedphoneservices", "indented" : true, "highlighted": false,"param":"fixedphoneservices","tooltip":"IBM office physical desk phone"},            
               {"name" : "Special Request","routingname":"/employeesearchsp", "indented" : true, "highlighted": false,"param":"specialrequest","tooltip":"Special request"},            
              
               {"name" : "Approvals Pending","routingname":"/approvalpending", "indented" : this.appin, "highlighted": this.apphl,"param":"approvalpending","tooltip":"To check pending approvals"},
                {"name" : "Revalidation Pending","routingname":"/revalidationpending", "indented" : this.revalin, "highlighted": this.revalhl,"param":"revalidationpending","tooltip":"To check revalidation pending"},
                {"name" : "Phone Number Search","routingname":"/extensionsummaryau", "indented" : this.pnsin, "highlighted": this.pnshl,"param":"phone_search","tooltip":"phone_search"},
                {"name" : "Resources","routingname":"/employeesearchres", "indented" : this.resin, "highlighted": this.reshl,"param":"resources","tooltip":"To check the voice services ownership"},
                {"name" : "Requests","routingname":"/employeesearchreq", "indented" : this.reqin, "highlighted": this.reqhl,"param":"requests","tooltip":"To check the outstanding request status"}
              ],
              "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request","Mobile"], 
              "step" : 1,
            }
          ]
        }}
      else{
      this.dataNav123 = { 
        "data": [
          {    
            "lhs": [
              {"name" : "Services","routingname":"/services", "indented" : this.serin, "highlighted": this.serhl,"param":"services","tooltip":"To check all available services"},

              {"name" : "Jabber","routingname":"/jabberservices", "indented" : true, "highlighted": this.jhl,"param":"jabberservices","tooltip":"IBM office telephone number"}, 
              {"name" : "FAC Code / IDD PIN","routingname":"/facservices", "indented" : true, "highlighted": this.fachl,"param":"facservices","tooltip":"Fac services"},  
              {"name" : "Mobile","routingname":"/mobileservices", "indented" : true, "highlighted": this.mhl,"param":"mobileservices","tooltip":"Mobile services"},                        

              {"name" : "Fixed Phone","routingname":"/fixedphoneservices", "indented" : this.fin, "highlighted": this.fhl,"param":"fixedphoneservices","tooltip":"IBM office physical desk phone"},            
              {"name" : "Special Request","routingname":"/employeesearchsp", "indented" : true, "highlighted": this.sphl,"param":"specialrequest","tooltip":"Special request"},            
              {"name" : "Approvals Pending","routingname":"/approvalpending", "indented" : this.appin, "highlighted": this.apphl,"param":"approvalpending","tooltip":"To check pending approvals"},
              {"name" : "Revalidation Pending","routingname":"/revalidationpending", "indented" : this.revalin, "highlighted": this.revalhl,"param":"revalidationpending","tooltip":"To check revalidation pending"},
              {"name" : "Phone Number Search","routingname":"/extensionsummaryau", "indented" : this.pnsin, "highlighted": this.pnshl,"param":"phone_search","tooltip":"To check ITN or phone number search"},
              {"name" : "Resources","routingname":"/employeesearchres", "indented" : this.resin, "highlighted": this.reshl,"param":"resources","tooltip":"To check the voice services ownership"},
              {"name" : "Requests","routingname":"/employeesearchreq", "indented" : this.reqin, "highlighted": this.reqhl,"param":"requests","tooltip":"To check the outstanding request status"}
            ],
            "services" : ["Jabber", "Fixed Phone", "FAC Code / IDD PIN","Special Request","Mobile"], 
            "step" : 1,
          }
        ]
      }}
    
    
      this.loggedinuser = this.cookie.getCookie('ccode')
        if (this.pcode== this.countryroute) {
          this.pcountrydetails=sessionStorage.getItem('countrydetails')
                console.log("navigationsession storageif" + JSON.parse(this.pcountrydetails).code)
          this.countryname = JSON.parse(this.pcountrydetails)
          if(this.countryname.fixphone_visibility !== undefined && this.countryname.fixphone_visibility == false) { //Add country pcode here if ACL Applicable
            if(this.countryname.auth_fixphone.includes(this.loggedinuser)) {
            this.fixphoneVisibility = true;
            } else {
              this.fixphoneVisibility = false;
            }
          } else {
            this.fixphoneVisibility = this.countryname.isfixphone;
            
          }
        
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
          this.display=true
        }
        else {
         
          this.display=false
          console.log("navigation componentelse" + this.ccode);
          this.loggedinuser = this.cookie.getCookie('ccode');
          this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
            
            this.countryname = data.countrydetails;
            sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
            sessionStorage.setItem('countryroute', this.pcode);
           
            this.fixphoneVisibility = false;
            if(this.countryname.fixphone_visibility !== undefined && this.countryname.fixphone_visibility == false) { //Add country pcode here if ACL Applicable
              if(this.countryname.auth_fixphone.includes(this.loggedinuser)) {
              this.fixphoneVisibility = true;
              } else {
                this.fixphoneVisibility = false;
              }
            } else {
              
              this.fixphoneVisibility = this.countryname.isfixphone;
              
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
         
          this.display=true   
          });
          //for lhs
          
          
        }
    
        
        
       


      
    
    
    
  })
  }



}


