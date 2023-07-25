Trigger CountContacts on Contact(After Insert , After delete){
    
    Set<Id> accountids = new Set<Id>();
    
    if(Trigger.isInsert){
        for(Contact con : Trigger.new){ //I,U,after undelete
            accountids.add(con.Accountid);
        }
    }
    
    if(Trigger.isDelete){ // Update , Delete
        for(Contact con : Trigger.old){
            accountids.add(con.Accountid);
        }
    }
    
    List<Account> allAccounts = [SELECT Id,Count_Of_Contacts__c,(SELECT Id FROM Contacts) FROM Account WHERE Id IN :accountids];
    
    List<Account> updateAccounts = new List<Account>();
    
    for(Account accs : allAccounts){
        accs.Count_Of_Contacts__c = accs.Contacts.size();
        updateAccounts.add(accs);
    }
    update updateAccounts;
}