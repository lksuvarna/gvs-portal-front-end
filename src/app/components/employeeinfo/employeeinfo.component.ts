import { Component, OnInit } from '@angular/core';
import { cloudantservice } from '../../_services/cloudant.service';
import { CookieHandlerService } from '../../_services/cookie-handler.service';
import { Router } from '@angular/router';

import { Db2Service } from '../../_services/db2.service'
import { servicenowservice } from '../../_services/servicenow.service'
import { bpservices } from '../../_services/bp.service'
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {


  constructor(private router: Router, private cookie: CookieHandlerService, private cloudantservice: cloudantservice, private Db2Service: Db2Service, private servicenowservice: servicenowservice, private bpservices: bpservices) { }
  countryname: any;
  ccode = '';
  cloudantData: any = []
  servicesData: any = []
  employeeInfo: any
  identifier: any;
  warninginfo = true;
  warninginfosnow = true;
  cnum: any
  submit() {
    this.router.navigate(['/entrydetails'])
  }


  ngOnInit(): void {



    const servicesData = {
      "data": [
        {
          "lhs": [
            { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
            { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },
            { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
            { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
          ],
          "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
        }
      ]
    }
    this.cnum = sessionStorage.getItem('cnum') 
    this.servicesData = servicesData.data[0];    
    this.warninginfo = false
    this.warninginfosnow=false
    // Code to search Db2 for Jabber New
    this.Db2Service.search_db2(this.cnum, 'jabber_new').subscribe(data => {
      console.log(' db2 response', data);
      console.log(' db2 response', data.message.length);

      if (data.message.length > 0) {
        this.warninginfo = true        
        this.identifier = data.message[0].IDENTIFIER
      }
      else {
        this.warninginfo = false        
        this.servicenowservice.searchsnow(this.cnum, 'jabber_new', 'IN-NS-000RQU').subscribe(data => {
          console.log(' snow response', data);
          console.log(' snow response', data.message.length);
          if (data.message.length > 0) {
            console.log(' snow response1', data.message.length);
            this.warninginfosnow=true           
            this.identifier = data.message
          }

        });
      }
    });

    //code to search snow for jabber new


    this.bpservices.bpdetails(this.cnum).subscribe(data => {
      console.log(' BP Details', data);
      this.employeeInfo = {

        employeeName: data.username.callupname,
        jobResponsibility: data.username.jobresponsibilities,
        businessUnit: data.username.workloc,
        department: data.username.dept,
        country: data.username.co,
        email: data.username.preferredidentity
      }

    });}}



