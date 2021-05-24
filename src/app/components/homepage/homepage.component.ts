import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectCucdmService } from './../../demo.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {bpservices} from '../../_services/bp.service';
import { cloudantservice } from '../../_services/cloudant.service';
import { NgModule } from '@angular/core';
import {TranslateConfigService} from '../../_services/translate-config.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {
  searchText = '';
  searchItems : any = []
  searchObj =  {
    name: '',
    flag: '',
    code:'',
    path:'',
    visibility: true
  }

  constructor(private Service: ConnectCucdmService,private cookie: CookieHandlerService,private bpservice :bpservices,private cloudantservice:cloudantservice, private translateconfigservice : TranslateConfigService) { }
  res_rec ='';
  fullName:any
  userDetails:any;
  uname='';
  countryname:any;
  translatecountryname :any;
  translatecountryname1 :boolean =false;
  ccode='';
  fixphoneVisibility:any;
  loggedinuser:any;
  searchData:any = [];

  generate(cnum : string): void{
    console.log(cnum);

    this.Service.getNodes(cnum).subscribe(data=> {
      console.log('Response received', data);
      this.res_rec=data.message;
     });
  }


  storeSearchTerm(searchText:string) {
    sessionStorage.setItem('searchText',searchText)
  }

  changeLanguage(type :string){
    this.translateconfigservice.changeLanguage(type);
  }

  ngOnInit(): void {
    //this.userDetails = (this.cookie.getCookie('user'));
   
    this.fullName = this.cookie.getCookie('usernamehome');
    if(this.fullName==undefined){
      this.fullName=this.cookie.getCookie('user');
    }
    this.fullName = this.fullName.replace(/[&\/\\#+()$~%.'":*?<>{}0-9]/g, ' ');
    this.fullName = this.fullName.replace(","," ");
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.loggedinuser = this.cookie.getCookie('ccode');
    this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
      let countrydetails=data.countrydetails;
      sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
      sessionStorage.setItem('countryroute', this.ccode);
      sessionStorage.setItem('pagedisplay','homepage')
      
      this.translatecountryname = this.countryname.name;
      if (this.translatecountryname == 'Canada/Caribbean'){
          this.translatecountryname1 = true;
          }
        else{
          this.translatecountryname1 = false;
        }

  
    //   this.searchItems = [
    //    {"name" : "India : Jabber", "flag" : "././assets/flags/744.png", "code": "744", "path": "jabberservices", "visibility":true},
    //    {"name" : "India : Fixed Phone", "flag" : "././assets/flags/744.png", "code": "744", "path": "fixedphoneservices", "visibility": this.fixphoneVisibility},
    //    {"name" : "India : FAC", "flag" : "././assets/flags/744.png", "code": "744", "path": "facservices", "visibility": true},
    //  ]
       
     }); 

     this.cloudantservice.getcountrysearchdetails(this.ccode).subscribe(data =>{
      this.searchData = data;
      console.log('Response received for search', this.searchData );

      // sessionStorage.setItem('Allcountrydetails', this.searchData.countrydetails);
      // sessionStorage.setItem('Allcountrydetails1', JSON.stringify(this.searchData.countrydetails));

      this.searchData.countrydetails.filter((element: any)=> {

        if(element.isjabber === true) {
          this.searchObj =  Object.create(this.searchObj)
          this.searchObj.name = element.name + ' : Jabber'
          this.searchObj.flag = element.flagname
          this.searchObj.code = element.code
          this.searchObj.path = 'jabberservices'
          this.searchObj.visibility = true
          this.searchItems.push(this.searchObj)
        }
        if (element.isfixphone === true) {
          this.searchObj =  Object.create(this.searchObj)
          this.searchObj.name = element.name + ' : Fixed Phone'
          this.searchObj.flag = element.flagname
          this.searchObj.code = element.code
          this.searchObj.path = 'fixedphoneservices'
          this.searchObj.visibility = this.getVisibility(element)
          this.searchItems.push(this.searchObj)
        } 
        if (element.isfac === true) {
          this.searchObj =  Object.create(this.searchObj)
          this.searchObj.name = element.name + ' : FAC'
          this.searchObj.flag = element.flagname
          this.searchObj.code = element.code
          this.searchObj.path = 'facservices'
          this.searchObj.visibility = true
          this.searchItems.push(this.searchObj)

        }
        // alert(JSON.stringify(this.searchItems))
      });
      
      this.searchItems.sort((a: any,b: any) : any => a.name.localeCompare(b.name));
    })

  } 

  getVisibility (data : any){
    if(data.fixphone_visibility == false) {
      if(data.auth_fixphone.includes(this.loggedinuser)) {
        this.fixphoneVisibility = true;
      } else {
        this.fixphoneVisibility = false;
      }
    } else {
      this.fixphoneVisibility = data.isfixphone;
    }

    return this.fixphoneVisibility
  }


}
