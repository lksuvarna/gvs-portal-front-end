import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { ActivatedRoute } from '@angular/router';
import { cloudantservice } from '../../_services/cloudant.service';

@Component({
  selector: 'app-uitoplinks',
  templateUrl: './uitoplinks.component.html',
  styleUrls: ['./uitoplinks.component.css'],
  host: {'(document:click)': 'onClick($event)'},
})
export class UitoplinksComponent implements OnInit {
  searchText = '';
  searchItems : any = []
  ccode='';
  routerPath = ''
  searchData:any = [];
  searchObj =  {
    name: '',
    path: '',
    code:''
  }

  // searchItems = [  
  //   {"name" : "Algeria","code":"612","path":"././assets/flags/612.png"},  
  //   {"name" : "India","code":"744","path":"././assets/flags/744.png"},
  //   {"name" : "France","code":"706","path":"././assets/flags/706.png"},
  //   {"name" : "Canada/Caribbean","code":"649","path":""},
  //   {"name" : "Latin America","code":"631","path":"././assets/flags/631.png"},
  //   {"name" : "USA","code":"897","path":"././assets/flags/897.png"},
  //   {"name" : "Australia","code":"616","path":"././assets/flags/616.png"},
  //   {"name" : "China","code":"672","path":"././assets/flags/672.png"},
    
  // ]

  constructor(private _eref: ElementRef,private cookie: CookieHandlerService,private route: ActivatedRoute, private cloudantservice: cloudantservice ) {
   }

  ngOnInit(): void {
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    this.route.queryParams	
    .subscribe(params => {

    this.routerPath = window.location.pathname

    if (this.routerPath === '/'){
      this.toggleHighlight('home-nav')
    } else if (this.routerPath === '/feedback') {
      this.toggleHighlight('feed-nav')
    } else {
      this.toggleHighlight('services-nav')
    }
    
  })

  this.cloudantservice.getcountrysearchdetails(this.ccode).subscribe(data =>{
    this.searchData = data;
    console.log('Response received for search', this.searchData );

    // sessionStorage.setItem('Allcountrydetails', this.searchData.countrydetails);
    // sessionStorage.setItem('Allcountrydetails1', JSON.stringify(this.searchData.countrydetails));

    this.searchData.countrydetails.filter((element: any)=> {
        this.searchObj =  Object.create(this.searchObj)
        this.searchObj.name = element.name
        this.searchObj.path = element.flagname
        this.searchObj.code = element.code
        this.searchItems.push(this.searchObj)
    });

    this.searchItems.sort((a: any,b: any): any => b.name.toLowerCase() < a.name.toLowerCase());
      // alert(JSON.stringify(this.searchItems))
  })

  } 

  onClick(event:Event) {
    if (!this._eref.nativeElement.contains(event.target))
    document.getElementById('countrydropdown')?.classList.remove('show');
   }

  toggleDropdown() {
    document.getElementById('countrydropdown')?.classList.toggle('show');
    this.searchText = ''
  }

  closeDropdown(id: any) {
    document.getElementById('countrydropdown')?.classList.remove('show');
    this.searchText = ''
    this.toggleHighlight(id)
    }

  toggleHighlight(id : any){
          
    if (id ==='home-nav'){
      document.getElementById('home-nav')?.classList.add('ds-bg-neutral-5')
      document.getElementById('services-nav')?.classList.remove('ds-bg-neutral-5')
      document.getElementById('feed-nav')?.classList.remove('ds-bg-neutral-5')
    } 

    if (id ==='services-nav'){
      document.getElementById('home-nav')?.classList.remove('ds-bg-neutral-5')
      document.getElementById('services-nav')?.classList.add('ds-bg-neutral-5')
      document.getElementById('feed-nav')?.classList.remove('ds-bg-neutral-5')
    } 

    if (id ==='feed-nav'){
      document.getElementById('home-nav')?.classList.remove('ds-bg-neutral-5')
      document.getElementById('services-nav')?.classList.remove('ds-bg-neutral-5')
      document.getElementById('feed-nav')?.classList.add('ds-bg-neutral-5')
    } 

  }

  

}


