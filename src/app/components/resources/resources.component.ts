import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Db2Service} from '../../_services/db2.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources = [
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69501765",fl_additional_information:"none"},
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69512345",fl_additional_information:"none"},
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69512351",fl_additional_information:"none"},
    {fl_resoucetype:"Jabber",fl_supplier:"Cisco",fl_phone_number:"69502111",fl_additional_information:"none"},
    {fl_resoucetype:"Jabber",fl_supplier:"Cisco",fl_phone_number:"69501222",fl_additional_information:"NA"}
  ];
  
  constructor(private cookie: CookieHandlerService,private cloudantservice:cloudantservice,private Db2Service: Db2Service) { }
  cloudantData: any = []
  servicesData: any = []
  countryname:any;
  sessionwarninginfo:any;
  warninginfosnowres=false;
  ccode='';
  dbdata:any;
  dbdata1:any;
  ngOnInit(): void {
    this.dbdata1=sessionStorage.getItem('identifier');
    this.sessionwarninginfo=sessionStorage.getItem('warninginfo')
    if (this.sessionwarninginfo =='false1'){
      this.warninginfosnowres = true  
     
     }
    console.log(this.dbdata1);
    console.log(this.dbdata1.identifier);
    console.log(JSON.parse(this.dbdata1).identifier);    
    var parsed = JSON.parse(JSON.stringify(JSON.parse(this.dbdata1)));
    this.dbdata = parsed;    
   console.log(this.dbdata[0].IDENTIFIER);
    
  }

  

}
