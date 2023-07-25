public class CL_2505_LT_getAccSearchText 
{
@AuraEnabled
Public Static List<Account> getaccount(string searchtext)
  {
String query = 'Select id,name,phone,industry,rating from Account where name like\'%'+searchtext+'%\'';
List<Account> accounts = Database.query(query);
return accounts;
  }
}