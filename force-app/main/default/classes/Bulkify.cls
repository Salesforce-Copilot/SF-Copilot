public class Bulkify 
{
	Public static void CreateBulkHRRecords()
    {
        List<Account> lstHrRecords = new List<Account>();
        
        for(integer counter = 1; counter <= 500; counter++)
        {
            // Prepare the Record..
            Account acc = new Account();
            
            	acc.Name = 'Apex HR - '+ counter;
            
          
          	// Add the Record to the Collection..
          lstHrRecords.Add(acc); 
        }
        
        if(! lstHrRecords.isEmpty())
        {
        	insert lstHrRecords;            
        } 		
    }
}