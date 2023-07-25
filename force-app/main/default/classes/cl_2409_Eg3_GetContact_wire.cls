public with sharing class cl_2409_Eg3_GetContact_wire {
    @AuraEnabled(cacheable=true)
    public static List<Contact> GetConList()
    {
    return [ select Id, FirstName, LastName, Phone, Email from contact];
    }
}