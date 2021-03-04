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

// Class used to create the payload for snow new jabber service.
export class Jabber_New
{
    orinator_payload !: String;
    cNum_payload !: String;
    Buildings_Disp !: String;
    Voice_Type_Disp !: boolean;
    Projectid_Disp !: String;
    icano_Disp !: String;
    identifier_hp_Disp !: String;
    BusinessUnit_Disp !: String;
    Department_number_Disp !: String;
    Location_final !: String;
    accid_Disp !: String;
    ReqNo !: String;
    level2_japproval !: String;
    countryname !: String;
    request_type !: String;
    evolution_instance !: String;
    level1_japproval!: String;
    qag !: String;
    class_of_serice !: String;
    gvs_portal_link !: String;
    gvs_approval_link !: String;
    SLA_type !: String;
    country_code !:String;

Jabber_New()
 {
    this.orinator_payload ="";
    this.cNum_payload ="";
    this.Buildings_Disp  ="";
    this.Voice_Type_Disp  =true;
    this.Projectid_Disp  ="";
    this.icano_Disp  ="";
    this.identifier_hp_Disp  ="";
    this.BusinessUnit_Disp  ="";
    this.Department_number_Disp ="";
    this.Location_final ="";
    this.accid_Disp ="";
    this.ReqNo ="";
    this.level2_japproval ="";
    this.countryname ="";
    this.request_type ="";
    this.evolution_instance ="";
    this.level1_japproval ="";
    this.qag ="";
    this.class_of_serice ="";
    this.gvs_portal_link ="";
    this.gvs_approval_link ="";
    this.SLA_type ="";
    this.country_code  ="";
 }

}