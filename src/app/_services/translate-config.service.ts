
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
  languageType :any;
  currentLang :any;
  pcode = '';
  countryroute:any;
  countryname11: any;
  countrydetails: any;
  currentlang1:any;
  //mainconfiguration ='';
 
  
  constructor(private translateservice : TranslateService, private cloudantservice: cloudantservice) { 
   

 // this.currentLang = localStorage.getItem("currentLang")
  this.currentlang1 = sessionStorage.getItem("currentlang1")
this.countryroute =sessionStorage.getItem("countryroute")


if ( sessionStorage.getItem('countryroute') == '649'){
  
  //if(localStorage.getItem('currentLang') == 'en') {
    if(sessionStorage.getItem('currentLang1') == 'fr_ca') {
    this.translateservice.use('fr_ca');
    
   }
   else {
    this.translateservice.use('en');
    }
}

else {
this.translateservice.use('en');
}
} 
 
  changeLanguage(type :string){
    this.translateservice.use(type);
   //  localStorage.setItem("currentLang", type);
    // this.currentLang = sessionStorage.getItem("currentLang1")
    sessionStorage.setItem("currentlang1",type);
    this.currentLang = type 
    this.languageType = type
     
  } 
  changeLanguage1(type :string){
    this.translateservice.use(type);
    sessionStorage.setItem("languageType",type);
    this.languageType = type
    
     
  } 

  
  
    
     readConfigFile() {
      
      if (this.languageType === "fr_ca") {
      return myJsonfrench;

      }
    else{
 
     return myJsonenglish;
    }
     }
 
}
