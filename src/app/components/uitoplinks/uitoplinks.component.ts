import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieHandlerService } from '../../_services/cookie-handler.service';

@Component({
  selector: 'app-uitoplinks',
  templateUrl: './uitoplinks.component.html',
  styleUrls: ['./uitoplinks.component.css'],
  host: {'(document:click)': 'onClick($event)'},
})
export class UitoplinksComponent implements OnInit {
  searchText = '';
  ccode='';
  routerPath = ''
  searchItems = [    
    {"name" : "India","code":"744","path":"././assets/flags/744.png"},
    {"name" : "France","code":"706","path":"././assets/flags/706.png"},
    
  ]

  constructor(private _eref: ElementRef,private cookie: CookieHandlerService) {
   }

  ngOnInit(): void {
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);


    this.routerPath = window.location.pathname

    if (this.routerPath === '/'){
      this.toggleHighlight('home-nav')
    } else if (this.routerPath === '/feedback') {
      this.toggleHighlight('feed-nav')
    } else {
      this.toggleHighlight('services-nav')
    }
    

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


