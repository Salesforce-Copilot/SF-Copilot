trigger CaseValidation on Case(before insert)
{
 for (case c : trigger.new)
 {
 if (c.Status=='Escalated' && c.Product__c==null)
 {
 
 c.Product__c.addError('Please enter the value');
 }
 
 
 }

}