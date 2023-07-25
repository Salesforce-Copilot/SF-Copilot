public class ContactListController {

    @AuraEnabled
    public static List<Contact> getContactList(String accountId){
        
        List<Contact> contactList = new List<Contact>([Select Id, FirstName, LastName, Name, Email, AccountId, Phone From Contact where Email != null AND AccountId =: accountId]);
    return contactList;
    }
}