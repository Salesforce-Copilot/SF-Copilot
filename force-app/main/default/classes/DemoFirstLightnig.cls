public class DemoFirstLightnig {
   
    @AuraEnabled
    public static Id createUserInfo(String fname,String lname){
        
        UserInfo__c ui=new UserInfo__c();
        ui.name=fname+lname;
        ui.FirstName__c=fname;
        ui.LastName__c=lname;
       
        insert ui;
        
        return ui.id;

}
}