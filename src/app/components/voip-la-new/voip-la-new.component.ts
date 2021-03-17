import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voip-la-new',
  templateUrl: './voip-la-new.component.html',
  styleUrls: ['./voip-la-new.component.css']
})
export class VoipLaNewComponent implements OnInit {

  location = ["Select Office Location","Belo Horizonte", "Curitiba","Fortaleza","Hortolandia"];  
  

  entryDetailsLA(formData: NgForm) {	
      
    if(formData.value.Location.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location == '') {	
      alert('Please select the Office Location');	
      return;	
    }	

  }

  constructor() { }

  ngOnInit(): void {
  }

}
