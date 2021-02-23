import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uitoplinks',
  templateUrl: './uitoplinks.component.html',
  styleUrls: ['./uitoplinks.component.css']
})
export class UitoplinksComponent implements OnInit {
  searchText = '';
  searchItems = [    
    {"name" : "India"},
    {"name" : "France"},
    
  ]
  constructor() {
   }

  ngOnInit(): void {
 
  }

  myFunction() {
    document.getElementById('myDropdown')?.classList.toggle('show');
  }

}


