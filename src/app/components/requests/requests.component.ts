import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests = [
    {fl_typesnow:"Jabber",fl_date_submittedsnow:"09/10/2020",fl_statussnow:"Rejected by Udayakumar_Padigala/India/IBM%PODCIGA@w3-969.ibm.com",fl_ReqNumbersnow:"IN-NS-06685M-4647",fl_reqcomments:""},
    {fl_typesnow:"Jabber",fl_date_submittedsnow:"02/05/2021",fl_statussnow:"Rejected by Udayakumar_Padigala/India/IBM%PODCIGA@w3-969.ibm.com",fl_ReqNumbersnow:"IN-NS-06685M-4647",fl_reqcomments:""},
    {fl_typesnow:"Jabber",fl_date_submittedsnow:"01/20/2021",fl_statussnow:"Rejected by Udayakumar_Padigala/India/IBM%PODCIGA@w3-969.ibm.com",fl_ReqNumbersnow:"IN-NS-06685M-4647",fl_reqcomments:['reply from: lksuvarna@in.ibm.com 01241O-744 ','reply from: lksuvarna@in.ibm.com Identifier: 1234 firstname: suvarna lastname :lakkisetty Ref:MSG33509027 01241O-744']},
    {fl_typesnow:"GVS FAC Code - Create",fl_date_submittedsnow:"01/06/2021",fl_statussnow:"Completed",fl_ReqNumbersnow:"IN-NS-06685M-5121",fl_reqcomments:"none"},
    {fl_typesnow:"Jabber",fl_date_submittedsnow:"01/20/2021",fl_statussnow:"Rejected by Udayakumar_Padigala/India/IBM%PODCIGA@w3-969.ibm.com",fl_ReqNumbersnow:"IN-NS-06685M-4647",fl_reqcomments:['reply from: lksuvarna@in.ibm.com 01241O-744 ','reply from: lksuvarna@in.ibm.com Identifier: 1234 firstname: suvarna lastname :lakkisetty Ref:MSG33509027 01241O-744']},
    {fl_typesnow:"Jabber",fl_date_submittedsnow:"01/20/2021",fl_statussnow:"Rejected by Udayakumar_Padigala/India/IBM%PODCIGA@w3-969.ibm.com",fl_ReqNumbersnow:"IN-NS-06685M-4647",fl_reqcomments:['reply from: lksuvarna@in.ibm.com 01241O-744 ','reply from: lksuvarna@in.ibm.com 01241O-744 ','reply from: lksuvarna@in.ibm.com Identifier: 1234 firstname: suvarna lastname :lakkisetty Ref:MSG33509027 01241O-744']}
  ];
  
  DisplayModel= 'none';
  allComments = [];

  constructor() { }
  cloudantData: any = []
  servicesData: any = []
  ngOnInit(): void {
    this.cloudantData  = {
      "code": "744",
      "name": "India",
      "isocode": "IN",
      "isjabber": true,
      "isfixedphone": false,
      "isfac": true,
      "isspecial": false
    }
  
    const servicesData = { 
    "data": [
      {    
        "lhs": [
          {"name" : "Services","routingname":"/services", "indented" : false, "highlighted": true},
          {"name" : "Approvals Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Revalidation Pending","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Resources","routingname":"/inprogress", "indented" : false, "highlighted": false},
          {"name" : "Requests","routingname":"/requests", "indented" : false, "highlighted": false}
        ],
        "services" : ["Jabber", "Fixed Phone", "FAC Code","Special Request"], 
        "titles": [
          "Terms of use",
          "Useful Information",
          "Please bear in mind the following points when making a request :"
        ],
        "usefulinfotexts": [
          "To make a request the Employee must exist in BluePages (except for cancellation requests).",
          "You must know the IBM serial Number of the person making the request.",
          "Only one request per employee per request type is processed at a time."
        ],
        "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
      }
    ]
  }
    
    this.servicesData = servicesData.data[0]
  
    
  }

  openNav(comments:any) {
    this.DisplayModel = 'block';
    this.allComments = comments;
    this.allComments
  }
  closeNav() {
    this.DisplayModel = 'none';
  }

}
