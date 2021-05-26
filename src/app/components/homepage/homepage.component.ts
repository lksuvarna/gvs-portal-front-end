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

  constructor(private Service: ConnectCucdmService,private cookie: CookieHandlerService,private bpservices :bpservices,private cloudantservice:cloudantservice, private translateconfigservice : TranslateConfigService) { }
  res_rec ='';
  fullName:any
  userDetails:any;
  uname='';
  employeeSerial:any;
  countryname:any;
  homepagecodesCA:any;
  codeCA:any;
  tscode:any
  translatecountryname :any;
  translatecountryname1 :boolean =false;
  ccode='';
  testusercode:any
  countrydetails:any;
  countrynamehome:any;
  employeeInfo:any
  display=false
  fixphoneVisibility:any;
  loggedinuser:any;
  searchData:any = [];
  list:any = [];

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
    this.employeeSerial=this.ccode;
    this.loggedinuser = this.cookie.getCookie('ccode');
    this.display=false;
    this.cloudantservice.getcountrydetails('000').subscribe(data=> {
      this.countrynamehome=data.countrydetails;
      
      if (data.countrydetailshome.this.homepagecodesCA.includes(this.ccode)){
        this.ccode=data.countrydetailshome.codeCA
      }
      if (data.countrydetailshome.this.homepagecodesLA.includes(this.ccode)){
        this.ccode=data.countrydetailshome.codeLA
      }
      if (data.countrydetailshome.this.homepagecodesPH.includes(this.ccode)){
        this.ccode=data.countrydetailshome.codePH
      }
      if (data.countrydetailshome.this.homepagecodesCN.includes(this.ccode)){
        this.ccode=data.countrydetailshome.codeCN
      }
    })
    this.cloudantservice.getcountrydetails(this.ccode).subscribe(data=> {
      console.log('Response received', data.countrydetails.name);
      this.countryname=data.countrydetails;
       this.countrydetails=JSON.stringify(data.countrydetails)
      sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
      sessionStorage.setItem('countryroute', this.ccode);
      sessionStorage.setItem('pagedisplay','homepage')
      this.display=true;
      console.log("testuser"+data.countrydetails.testuser)
      if (data.countrydetails.testuser){
        this.employeeSerial=data.countrydetails.testuser;
        this.cloudantservice.getcountrydetails('000').subscribe(data=> {
          this.countrynamehome=data.countrydetails;
          console.log("canada codes"+data.countrydetails.homepagecodesCA+data.countrydetails.codeCA)
          console.log("testusercod"+this.ccode)
          if (data.countrydetails.homepagecodesCA.includes(this.employeeSerial.substring(6,9))){
            
            this.testusercode=data.countrydetails.codeCA
            console.log("testusercod1"+this.testusercode)
            this.ccode=data.countrydetails.codeCA
          }
          else if (data.countrydetails.homepagecodesLA.includes(this.employeeSerial.substring(6,9))){
            this.testusercode=data.countrydetails.codeLA
            this.ccode=data.countrydetailshome.codeLA
          }
          else if (data.countrydetails.homepagecodesPH.includes(this.employeeSerial.substring(6,9))){
            this.testusercode=data.countrydetails.codePH
            this.ccode=data.countrydetailshome.codePH
          }
          else if (data.countrydetails.homepagecodesCN.includes(this.employeeSerial.substring(6,9))){
            this.testusercode=data.countrydetails.codeCN
            this.ccode=data.countrydetailshome.codeCN
          }
          else{
            this. testusercode=this.employeeSerial.substring(6,9)
            console.log("testusercod2"+this.testusercode)
            this.ccode=this.employeeSerial.substring(6,9)
          }
          this.cloudantservice.getcountrydetails(this.testusercode).subscribe(data=> {
            if(data){
             console.log('Response received', data.countrydetails.name);
             this.countryname=data.countrydetails;
             this.getBPData();
           }
           })

        }
        
        )
        
      }
      
      this.translatecountryname = this.countryname.name;
      if (this.translatecountryname == 'Canada/Caribbean'){
          this.translatecountryname1 = true;
          }
        else{
          this.translatecountryname1 = false;
        }

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
  getBPData(): any {
    console.log(' this.employeeSerial', this.fullName);
    this.bpservices.bpdetails(this.employeeSerial).subscribe(data => {
      console.log(' this.employeeSerial', this.employeeSerial);
      console.log(' BP Details', data.userdata);
      
      if (data.userdata ) {
        var ename =   data.username.preferredfirstname+" "+data.username.preferredlastname 
        var ename1 =  data.username.preferredlastname+", "+data.username.preferredfirstname
        if (data.username.preferredlastname == undefined || data.username.preferredfirstname == undefined) {
          ename = data.username.callupname
          ename1=data.username.callupname
        }
         this.fullName=ename;
         sessionStorage.setItem('testusername',ename1)
      }
    });
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
