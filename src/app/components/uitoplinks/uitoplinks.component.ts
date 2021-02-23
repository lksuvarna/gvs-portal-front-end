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
    {"name" : "Algeria"},
    {"name" : "Angola"},
    {"name" : "China"},
    {"name" : "India"},
    {"name" : "Indonesia"},
    {"name" : "Poland"},
    {"name" : "Romania"},
    {"name" : "Senegal"},
    {"name" : "Singapore"}
  ]
  constructor() {
   }

  ngOnInit(): void {
 
  }

  myFunction() {
    document.getElementById('myDropdown')?.classList.toggle('show');
  }

}


