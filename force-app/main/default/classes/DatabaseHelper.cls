public class DatabaseHelper 
{    
    Public static void GetAccounts(integer limitValue, integer offsetValue)
    {
        List<Account> lstAccounts = [Select id, name, rating, industry, annualrevenue, active__C
                                    			from Account
                                     				Order by name
                                    					Limit : limitValue
                                    						Offset : offsetValue];
        
        if(! lstAccounts.isEmpty())
        {
            for(Account acc : lstAccounts)
            {
                system.debug('Account Record...: '+ acc);
            }
        }
    }
}