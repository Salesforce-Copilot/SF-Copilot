trigger ContactTrigger on Contact (after insert, after update, after delete, after undelete) {

    switch on trigger.operationType{
        when after_insert{
            Set<Id> accountsIds =  new Set<Id>();
            for(Contact con : trigger.new){
                if(string.isNotBlank(con.AccountId)){
                    accountsIds.add(con.AccountId);
                }
                    List<AggregateResult> results =[select AccountId,COUNT(Id) TotalContacts from contact where Active__c=true and AccountId =:accountsIds Group By AccountId ];
                   List<Account> AccountstoUpdate = new List<Account>();
                for(AggregateResult result : results){
                        //Get accountid and number of active contacts
                        String accid = String.valueof(result.get('AccountId'));
                        Integer TotalContact = Integer.Valueof(result.get('TotalContacts'));
                        Account acc = new Account(Id=accid,Count_Contact__c=TotalContact);
                        AccountstoUpdate.add(acc);
                    }
                
            
            update AccountstoUpdate;
        }
        }
        when after_update{
            Set<Id> accountsIds =  new Set<Id>();
            for(Contact con : trigger.new){
                //capture the accounts id only if the active checkbox value is flipped
                if(String.isNotBlank(con.AccountId) && Trigger.oldMap.get(con.id).Active__c !=con.Active__c ){
                    accountsIds.add(con.AccountId);
                }
                else if(trigger.oldMap.get(con.id).AccountId != con.AccountId){
                    accountsIds.add(Trigger.oldMap.get(con.id).AccountId);
                    accountsIds.add(con.AccountId);
                }
            }
            //get agreegate result for all account
            List<AggregateResult> results =[select AccountId,COUNT(Id) TotalContacts from contact where Active__c=true and AccountId =:accountsIds Group By AccountId ];
            //build final list of account to update
            List<Account> AccountstoUpdate = new List<Account>();
                    for(AggregateResult result : results){
                        //Get accountid and number of active contacts
                        String accid = String.valueof(result.get('AccountId'));
                        Integer TotalContact = Integer.Valueof(result.get('TotalContacts'));
                        Account acc = new Account(Id=accid,Count_Contact__c=TotalContact);
                         AccountstoUpdate.add(acc);
                    }
            Update AccountstoUpdate;
        }
    }
}