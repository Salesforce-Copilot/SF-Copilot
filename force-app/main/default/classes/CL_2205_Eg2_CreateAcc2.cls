public class CL_2205_Eg2_CreateAcc2 
{
@AuraEnabled
Public Static String callAccount(Account acc)
    {
String result;
  Try
   {
Insert acc; 
result='Success';
    }
catch(Exception e)
    {
result=e.getMessage();   
    }
Return result;
    }
}