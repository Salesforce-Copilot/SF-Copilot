public class CL_2005_Eg2_RetriveData 
{
@AuraEnabled
Public Static Account Givedata()
  {
Account acc = [Select Id, name,Phone,Industry,Rating from Account limit 1]; 
Return acc;
  }
}