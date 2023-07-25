public class SearchAcctPageDemoCntr {

public string inputInfo{get;set;}
public List<Account> acc{get;set;}
    public boolean showdisplay{get;set;}    

public SearchAcctPageDemoCntr(){
    showdisplay=false;
}

public PageReference customSearch(){

System.debug('Entered in customSearch method='+inputInfo);
    
    if(inputInfo == ''){

ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Please enter a value in the Required Field'));

    } else{
    showdisplay=true;
acc=[select Id,Name,Rating from Account where Name =: inputInfo limit 10];
   
}
    return null;
}
}