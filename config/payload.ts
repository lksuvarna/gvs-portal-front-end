// Class used to create the payload for Db2 search service.
export class db2search
{
    cnum!: String;
    request_type!: String;
    fixedphone !: String;
    identifier !: String;
    country !: String;

db2search()
 {
  this.cnum="";
  this.request_type="";
  this.fixedphone="";
  this.country="";
  this.identifier="";
 }

}

// Class used to create the payload for snow search service AND snow Approve/Request request.
export class snowsearch
{
    cnum!: String;
    request_type!: String;
    reqno !: String;
    sysid !: String;
    number !: String;
    status !: String;
    comments !: String;

snowsearch()
 {
  this.cnum="";
  this.request_type="";
  this.reqno="";
  this.sysid="";
  this.number="";
  this.comments="";
 }

}

// Class used to create the payload for snow new jabber service.
export class Jabber_New
{
    orinator_payload !: String;
    cNum_payload !: String;
    Buildings_Disp !: String;
    Voice_Type_Disp !: String;
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
    default_call_permission !: String

Jabber_New()
 {
    this.orinator_payload ="";
    this.cNum_payload ="";
    this.Buildings_Disp  ="";
    this.Voice_Type_Disp  ="";
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
    this.default_call_permission="";
 }

}

// class used to create the payload for snow delete jabber service

export class Jabber_Delete
{
    orinator_payload !: String;
    cNum_payload !: String;
    ReqNo !: String;
    countryname !: String;
    Identifier_Disp !: String;
    site_address !: String;
    request_type !: String;
    evolution_instance !: String;
    country_code !:String;
    gvs_portal_link !:String;

Jabber_Delete()
 {
    this.orinator_payload ="";
    this.cNum_payload ="";
    this.ReqNo ="";
    this.countryname ="";
    this.request_type ="";
    this.evolution_instance ="";
    this.country_code  ="";
    this.gvs_portal_link = "";
 }

}

// class used to create the payload for snow move jabber service

export class Jabber_Move
{
    orinator_payload !: String;
    cNum_payload !: String;
    evolution_instance !: String;
    Voice_Type_Disp !: String;
    Projectid_Disp !: String;
    default_call_permission !: String;
    icano_Disp !: String;
    BusinessUnit_Disp !: String;
    Department_number_Disp !: String;
    accid_Disp !: String;
    level1_japproval !: String;
    level2_japproval !: String;
    Location_final !: String;
    ReqNo !: String;
    qag !: String;
    class_of_serice !: String;
    gvs_portal_link !: String;
    gvs_approval_link !: String;
    countryname !: String;
    correct_location !: String;
    Identifier_Disp !: String;
    request_type !: String;
    Site_location !: String;

Jabber_Move()
 {
    this.orinator_payload ="";
    this.cNum_payload ="";
    this.evolution_instance ="";
    this.Voice_Type_Disp ="";
    this.Projectid_Disp="";
    this.default_call_permission ="";
    this.icano_Disp ="";
    this.BusinessUnit_Disp ="";
    this.Department_number_Disp ="";
    this.accid_Disp ="";
    this.level1_japproval ="";
    this.level2_japproval ="";
    this.Location_final ="";
    this.ReqNo ="";
    this.qag ="";
    this.class_of_serice ="";
    this.gvs_portal_link ="";
    this.gvs_approval_link ="";
    this.countryname ="";
    this.correct_location ="";
    this.Identifier_Disp ="";
    this.request_type="";
    this.Site_location="";
 }

}

// class used to create the payload for snow update jabber service

export class Jabber_Update
{
    orinator_payload !: String;
    cNum_payload !: String;
    Projectid_Disp !: String;
    icano_Disp !: String;
    Department_number_Disp !: String;
    accid_Disp !: String;
    ReqNo !: String;
    countryname !: String;
    evolution_instance !: String;
    gvs_portal_link !: String;
    gvs_approval_link !: String;
    Identifier_Selected !: String;
    updated_for !: String;
    request_type !: String;
    prov_type !: String;
    Current_VM !: String;
    Current_COS !: String;
    Justification !: String;
    New_Voice !: String;
    New_COS !: String;

Jabber_Update()
 {
    
    this.orinator_payload ="";
    this.cNum_payload  ="";
    this.Projectid_Disp  ="";
    this.icano_Disp ="";
    this.Department_number_Disp  ="";
    this.accid_Disp  ="";
    this.ReqNo  ="";
    this.countryname  ="";
    this.evolution_instance  ="";
    this.gvs_portal_link ="";
    this.gvs_approval_link  ="";
    this.Identifier_Selected  ="";
    this.updated_for  ="";
    this.request_type="";
    this.prov_type="";
    this.Current_VM="";
    this.Current_COS="";
    this.Justification="";
    this.New_Voice="";
    this.New_COS="";
 }

}

// Class used to create the payload for snow new Fac service.
export class Fac_New
{
    orinator_payload !: String;
    cNum_payload !: String;
    Buildings_Disp !: String;
    Voice_Type_Disp !: String;
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
    default_call_permission !: String
    Dept_IN !: String;
    authLevel_final !: String;
    Fac_Type_disp !: String;
    validity_disp !: String;
    comments !: String;
    authLevel_disp !:String;
    authValue !: String;

Fac_New()
 {
    this.orinator_payload ="";
    this.cNum_payload ="";
    this.Location_final ="";
    this.Buildings_Disp  ="";
    this.Voice_Type_Disp  ="";
    this.Projectid_Disp  ="";
    this.Department_number_Disp ="";
    this.BusinessUnit_Disp  ="";
    this.Dept_IN  ="";
    this.authLevel_final  ="";
    this.Fac_Type_disp  ="";
    this.validity_disp  ="";
    this.comments  ="";
    this.ReqNo ="";
    this.gvs_portal_link ="";
    this.gvs_approval_link ="";
    this.countryname  ="";
    this.SLA_type ="";
    this.authLevel_disp ="";
    this.authValue = ""

 }

}
// class used to create the payload for snow deactivate fac service

export class Fac_Deactivate
{
    orinator_payload !: String;
    cNum_payload !: String;
    ReqNo !: String;
    countryname !: String;
    Identifier_Disp !: String;
    site_address !: String;
    request_type !: String;
    evolution_instance !: String;
    country_code !:String;
    authLevel_final !:String;
    BusinessUnit_Disp!:String;
    authValue !:String;
    gvs_portal_link !: String;


Fac_Deactivate()
 {
    this.orinator_payload ="";
    this.cNum_payload ="";
    this.authLevel_final="";
    this.BusinessUnit_Disp="";
    this.ReqNo ="";
    this.authValue="";
    this.gvs_portal_link=""
    this.countryname ="";
    this.request_type ="";
    this.evolution_instance ="";
    this.country_code  ="";
 }

}

// Class used to create the payload for snow update Fac service.
export class Fac_Update
{
    orinator_payload !: String;
    cNum_payload !: String;
    icano_Disp !: String;
    accid_Disp !: String;
    ReqNo !: String;
    countryname !: String;
    evolution_instance !: String;
    gvs_portal_link !: String;
    gvs_approval_link !: String;
    updated_for !: String;
    request_type !: String;
    prov_type !: String;
    Justification !: String;
    Location_1  !: String;
    Buildings  !: String;
    Funded  !: String;
    chargeDepartmentCode  !: String;
    authLevel  !: String;
    bj_disp !: String;
    currLocation !: String;
    currChargeDeptCode !: String;
    currAuthorizationLevel !: String;
    currFACCodeType !: String;	
    currvalidity !: String;
    updated_for_values !: String;

Fac_Update()
 {
    
    this.orinator_payload ="";
    this.cNum_payload  ="";
    this.icano_Disp ="";
    this.accid_Disp  ="";
    this.ReqNo  ="";
    this.countryname  ="";
    this.evolution_instance  ="";
    this.gvs_portal_link ="";
    this.gvs_approval_link  ="";
    this.updated_for  ="";
    this.updated_for_values = "",
    this.request_type="";
    this.prov_type="";
    this.Justification="";
    this.Location_1 ="";
    this.Buildings = "";
    this.Funded = "";
    this.chargeDepartmentCode = "";
    this.authLevel = "";
    this.bj_disp="";
    this.currLocation ="";
    this.currChargeDeptCode ="";
    this.currAuthorizationLevel ="";
    this.currFACCodeType ="";
    this.currvalidity ="";
    
 }

}

// Class used to create the payload for snow reset Fac service.
export class Fac_Reset
{
    orinator_payload !: String;
    cNum_payload !: String;
    ReqNo !: String;
    countryname !: String;
    evolution_instance !: String;
    gvs_portal_link !: String;
    gvs_approval_link !: String;
    Curr_Location !: String;
    authLevel_final !: String;
    request_type !: String;
    business_unit !: String;
    siteaddress !: String;
    authLevel !: String

Fac_Reset()
 {
    
    this.orinator_payload ="";
    this.cNum_payload  ="";
    this.ReqNo  ="";
    this.countryname  ="";
    this.evolution_instance  ="";
    this.gvs_portal_link ="";
    this.gvs_approval_link  ="";
    this.Curr_Location  ="";
    this.authLevel_final ="";
    this.request_type  ="";  
    this.business_unit = "";
    this.siteaddress = "";
    this.authLevel = ""
 }

}

// // class used to create the payload for snow special request service

export class Special_Request
{
    orinator_payload !: String;
    cNum_payload !: String;
    Identifier_Disp !: String;
    Location_Disp !: String;
    Comments !: String;
    ReqNo !: String;
    gvs_portal_link !: String;
    countryname !: String;
    request_type !: String;

Special_Request()
 {
    
    this.orinator_payload="";
    this.cNum_payload="";
    this.Identifier_Disp="";
    this.Location_Disp="";
    this.Comments="";
    this.ReqNo="";
    this.gvs_portal_link="";
    this.countryname="";
    this.request_type="";
 }

}


// // class used to create the payload for snow fixed phone new service
export class fixedphone_new
{
orinator_payload !: String;
cNum_payload !: String;
Buildings_Disp !: String;
Voice_Type_Disp !: String;
Projectid_Disp !: String;
icano_Disp !: String;
identifier_hp_Disp !: String;
BusinessUnit_Disp !: String;
Department_number_Disp !: String;
Location_final !: String;
accid_Disp !: String;
ReqNo !: String;
Device_Type_Disp!: String;
Model_Disp!: String;
MAC_Disp!: String;
Voicemail_Disp!: String;
Desc_Disp!: String;
LocationCorrect!: String;
COS_Disp!: String;
Justification_Disp!: String;
level2_japproval!: String;
countryname!: String;
request_type!: String;
evolution_instance!: String;
level1_japproval!: String;
gvs_portal_link!: String;
gvs_approval_link!: String;
SLA_type!: String;
country_code!: String;
LocationCorrectnew!: String;

fixedphone_new()
{
this.orinator_payload="";
this.cNum_payload="";
this.Buildings_Disp="";
this.Voice_Type_Disp="";
this.Projectid_Disp="";
this.icano_Disp="";
this.identifier_hp_Disp="";
this.BusinessUnit_Disp="";
this.Department_number_Disp="";
this.Location_final="";
this.accid_Disp="";
this.ReqNo="";
this.Device_Type_Disp="";
this.Model_Disp="";
this.MAC_Disp="";
this.Voicemail_Disp="";
this.Desc_Disp="";
this.LocationCorrect="";
this.COS_Disp="";
this.Justification_Disp="";
this.level2_japproval="";
this.countryname="";
this.request_type="";
this.evolution_instance="";
this.level1_japproval="";
this.gvs_portal_link="";
this.gvs_approval_link="";
this.SLA_type="";
this.country_code="";
this.LocationCorrectnew="";
}

}


// // class used to create the payload for snow fixed phone delete service
export class fixedphone_delete
{
    request_type!: String;
    orinator_payload!: String;
    cNum_payload!: String;
    Identifier!: String;
    ReqNo!: String;
    macaddress!: String;
    olddesc!: String;
    ccmail!: String;
    countryname!: String;
    evolution_instance!: String;
    gvs_portal_link!: String;

    fixedphone_delete(){
     this.request_type="";
     this.orinator_payload="";
     this.cNum_payload="";
     this.Identifier="";
     this.ReqNo="";
     this.macaddress="";
     this.olddesc="";
     this.ccmail="";
     this.countryname="";
     this.evolution_instance="";
     this.gvs_portal_link="";

    }

}


// // class used to create the payload for snow fixed phone update service
export class fixedphone_update
{

request_type!: String; 
orinator_payload!: String; 
cNum_payload!: String; 
Comments_Disp!: String;
Newdesc_Disp!: String;
NewModel_Disp!: String;
MAC_Disp!: String;
updatereq_Disp!: String;
currmodel!: String;
olddesc!: String;
Identifier!: String;
MAC!: String;
Location_final!: String;
LocationCorrectnew!: String;
ReqNo!: String;
countryname!: String;
Location_Disp!: String;
evolution_instance!: String;
gvs_portal_link!: String;
gvs_approval_link!: String;
ccmail!: String;

fixedphone_update(){
    this.request_type="";
    this.orinator_payload="";
    this.cNum_payload="";
    this.Comments_Disp="";
    this.Newdesc_Disp="";
    this.NewModel_Disp="";
    this.MAC_Disp="";
    this.updatereq_Disp="";
    this.currmodel="";
    this.olddesc="";
    this.Identifier="";
    this.MAC="";
    this.Location_final="";
    this.LocationCorrectnew="";
    this.ReqNo="";
    this.countryname="";
    this.Location_Disp="";
    this.evolution_instance="";
    this.gvs_portal_link="";
    this.gvs_approval_link="";
    this.ccmail="";
    
    

}

}

//setting up cache class for data retention.

export class Create_Cache_jabber
{

setflag !: boolean;
cnum !:string;
officeLocation	!: String;
campus	!: String;
funded	!: String;
chargeDepartmentCode !: String;	
businessUnit !: String;
projectId	!: String;
fixPhoneIdentifier !: String;
selected_jabber !: String;
update_vm!:String;
update_cos!:String;
voicemail!:String
cos!:String
businessjustification !: String;


Create_Cache_jabber(){

       this.cnum='';
       this.officeLocation	='';
       this.campus	='';
       this.funded	='';
       this.chargeDepartmentCode ='';
       this.businessUnit='';
       this.projectId	='';
       this.fixPhoneIdentifier ='';
       this.setflag=false;
       this.selected_jabber='';
       this.update_vm='';
       this.update_cos='';
       this.voicemail='';
       this.cos='';
       this.businessjustification='';

    }

}

//setting up cache class for fac new data retention.

export class Create_Cache_fac
{

setflag !: boolean;
cnum !:string;
officeLocation	!: String;
campus	!: String;
funded	!: String;
chargeDepartmentCode !: String;	
businessUnit !: String;
projectId	!: String;
fixPhoneIdentifier !: String;
selected_jabber !: String;
authLevel !: String;
Fac_Type !: String;
validity !: String;
Comments !: String;

Create_Cache_fac(){

       this.cnum='';
       this.officeLocation	='';
       this.campus	='';
       this.funded	='';
       this.chargeDepartmentCode ='';
       this.businessUnit='';
       this.authLevel ='';	
       this.Fac_Type ='';
       this.validity ='';
       this.Comments ='';
       this.setflag=false;
       this.selected_jabber='';

    }

}