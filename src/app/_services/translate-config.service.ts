
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloudantservice } from '../_services/cloudant.service';


declare var  require :any;
var myJsonenglish:any  = require('../../assets/i18n/en.json');

declare var  require :any;
var myJsonfrench:any  = require('../../assets/i18n/fr_ca.json');


//import * as myJson from '../../assets/i18n/en.json';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  languageType = '';
  currentLang :any;
  pcode = '';
  countryroute:any;
  countryname11: any;
  countrydetails: any;
  currentlang1:any;
  //mainconfiguration ='';
 
  
  constructor(private translateservice : TranslateService, private cloudantservice: cloudantservice) { 
   

  this.currentLang = localStorage.getItem("currentLang")
  this.currentlang1 = localStorage.getItem("currentlang1")
this.countryroute =sessionStorage.getItem("countryroute")
this.countryname11=localStorage.getItem("countryroute")

if ( sessionStorage.getItem('countryroute') == '649'){
  
  if(localStorage.getItem('currentLang') == 'en') {
    
    this.translateservice.use('en');
    
   }
   else {
   
    this.translateservice.use('fr_ca');
    }
}

else {
this.translateservice.use('en');
}
} 
 
  changeLanguage(type :string){
    this.translateservice.use(type);
    this.languageType = type;
     localStorage.setItem("currentLang", type);
    this.currentLang = localStorage.getItem("currentLang")
    /* sessionStorage.setItem("currentlang1",type);
    this.currentLang = sessionStorage.getItem("currentlang1") */
     
  } 
  changeLanguage1(type :string){
    this.translateservice.use(type);
    this.languageType = type;
     
  } 

  
  
    
     readConfigFile() {
      
      if (this.languageType === "fr_ca") {

      return myJsonfrench;

      }
    //} 
     return myJsonenglish;
     }
 
}
