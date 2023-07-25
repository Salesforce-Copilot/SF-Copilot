public class CL_2105_LT_CreateAccount 
{
@AuraEnabled
Public Static String createAccount(String name, String rating, String phone , String industry)
   {
String Result;
  Try
  {
Account A = New Account();
A.Name = name;
A.Phone = phone;
A.Rating = rating;
A.Industry = industry;
Insert A;
Result = 'Account Created Succesfully=====>'+A.Id;
  }
Catch(exception e)
      {
Result = 'Account Creation Failed with Error=====>'+e.getMessage();
      }
Return Result;
   }
}