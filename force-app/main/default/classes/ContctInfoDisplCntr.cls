public class ContctInfoDisplCntr {
    public List<WrapperInfo> listofWrapperinfo {get;set;} // //finally we are storing all chkbox+contact+oppty info inthis list and will display to the user 
    //public List<Contact> listOfCnts {get;set;}
    public Opportunity oprecord {get;set;}
    

    public ContctInfoDisplCntr(ApexPages.StandardController controller) { 
      listofWrapperinfo = new List<WrapperInfo> ();
       // Step-1 : fetch Current record Id , Based on current record , Fetch current record Information.
        String currentRecordId = ApexPages.currentPage().getParameters().get('id');
        System.debug('CurrentRecordId====='+currentRecordId);
 oprecord = [Select Id,Name,AccountId,StageName,ContactInfo__c, Type from Opportunity where id =:currentRecordId];
System.debug('oprecord====='+oprecord);
System.debug('Account from oppourtunity===='+oprecord.AccountId);
        //fetch contacts
List<Contact> listOfCntsInfo = [select id , Name from Contact where AccountId =: oprecord.AccountId];
        if(listOfCntsInfo.isEmpty()){

ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity.ERROR, 'No Contact from this Account');
ApexPages.addMessage(myMsg);
            return ;
        } else{
            
            for(contact ct :listOfCntsInfo){
               WrapperInfo wp = new WrapperInfo(false,oprecord,ct);
                listofWrapperinfo.add(wp); 
            }
        }

      }
    
    public PageReference customUpdate(){
  List<Opportunity> listofOppty=new List<Opportunity>();
for(WrapperInfo wrpRecord:listofWrapperInfo){

if(wrpRecord.isSelected == true){
oprecord.ContactInfo__c = wrpRecord.cntrecord.Id;
listofOppty.add(oprecord);
}
}

update listofOppty;
        PageReference pageReference = new Pagereference('/' + oprecord.id);
pageReference.setRedirect(true);
return PageReference;
        
    }
    
    public void customCancel(){
        
        
    }

    Public class WrapperInfo{

public Boolean isSelected {get;set;}
public Contact cntRecord {get;set;}
public opportunity optRecord {get;set;}

public WrapperInfo(Boolean b, Opportunity op, Contact ct){

isSelected =b;
cntRecord=ct;
optRecord=op;
}
}

}