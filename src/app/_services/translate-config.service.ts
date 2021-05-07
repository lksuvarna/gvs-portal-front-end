import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


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
  //mainconfiguration ='';

  

  constructor(private translateservice : TranslateService) { 
    this.currentLang=sessionStorage.getItem('currentLang')
    if(sessionStorage.getItem('currentLang') == 'fr_ca' ) {
     this.translateservice.use('fr_ca');
    
   }
   else {
   
    translateservice.use('en');
    
}
       
  }
 
  changeLanguage(type :string){
    this.translateservice.use(type);
    this.languageType = type;
    sessionStorage.setItem("currentLang", type);
    this.currentLang = sessionStorage.getItem("currentLang")
    
  } 
  
    
     readConfigFile() {
      
      if (this.languageType === "fr_ca") {
      return myJsonfrench;
      }
    //} 
     return myJsonenglish;
     }
 
}
