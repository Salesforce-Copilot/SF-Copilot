public with sharing class cl_2709_Eg1_wire2 {
    
    @AuraEnabled(cacheable=true)
    public static list<contact> findcontacts(string searchtext)
{
String key = '%'+searchtext+'%';
Return [Select Id, Name, Phone, Email from contact where firstname like : key] ;

}
}