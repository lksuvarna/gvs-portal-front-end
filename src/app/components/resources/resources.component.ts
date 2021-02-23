import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources = [
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69501765",fl_additional_information:"none"},
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69512345",fl_additional_information:"none"},
    {fl_resoucetype:"IP Extension",fl_supplier:"Cisco",fl_phone_number:"69512351",fl_additional_information:"none"},
    {fl_resoucetype:"Jabber",fl_supplier:"Cisco",fl_phone_number:"69502111",fl_additional_information:"none"},
    {fl_resoucetype:"Jabber",fl_supplier:"Cisco",fl_phone_number:"69501222",fl_additional_information:"NA"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
