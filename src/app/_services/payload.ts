// Class used to create the payload for Db2 search service.
export class db2search
{
    cnum!: String;
    request_type!: String;

db2search()
 {
  this.cnum="";
  this.request_type="";
 }

}

// Class used to create the payload for snow search service.
export class snowsearch
{
    cnum!: String;
    request_type!: String;
    reqno !: String;
    sysid !: String;
    number !: String;

snowsearch()
 {
  this.cnum="";
  this.request_type="";
  this.reqno="";
  this.sysid="";
  this.number="";
 }

}