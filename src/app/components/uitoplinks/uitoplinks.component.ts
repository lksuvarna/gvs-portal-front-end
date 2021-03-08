import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-uitoplinks',
  templateUrl: './uitoplinks.component.html',
  styleUrls: ['./uitoplinks.component.css'],
  host: {'(document:click)': 'onClick($event)'},
})
export class UitoplinksComponent implements OnInit {
  searchText = '';
  ccode='';
  searchItems = [    
    {"name" : "India","code":"744"},
    {"name" : "France","code":"706"},
    
  ]

  constructor(private router:Router,private _eref: ElementRef,private cookie: CookieHandlerService) {
   }

  ngOnInit(): void {
    this.ccode=this.cookie.getCookie('ccode').substring(6,9);
    
  }

  onClick(event:Event) {
    if (!this._eref.nativeElement.contains(event.target))
    document.getElementById('countrydropdown')?.classList.remove('show');
    
   }

  toggleDropdown() {
    document.getElementById('countrydropdown')?.classList.toggle('show');
    this.searchText = ''
  }

  closeDropdown() {
    document.getElementById('countrydropdown')?.classList.remove('show');
    this.searchText = ''
  }

  

}


