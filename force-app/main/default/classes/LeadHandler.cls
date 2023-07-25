public class LeadHandler {
    
    public static void beforeInsertHandler(List<Lead> leadrecords){
        for(Lead LeadRecord : leadrecords){
            //if lead Source is blank then make it other
            // if(Trigger.isBefore && String.isBlank(LeadRecord.LeadSource)){
            LeadRecord.LeadSource = 'Other';
            
            if(String.isBlank(LeadRecord.Industry)){
                
                LeadRecord.addError('The Industry field can not be blank');
            } 
        }
    }
    public static void beforeUpdateHandler(List<Lead> leadrecords,Map<Id,Lead> Lstlead){
        for(Lead LeadRecord : leadrecords){
            if(String.isBlank(LeadRecord.Industry)){
                
                LeadRecord.addError('The Industry field can not be blank');
            }
            if((LeadRecord.Status=='Closed - Converted' || LeadRecord.Status=='Closed - Not Converted') && Lstlead.get(LeadRecord.id).Status=='Open - Not Contacted'){
                LeadRecord.Status.AddError('You can not close directly any lead record');
            }
        }
    }
    public static void afterInsertHandler(List<Lead> Leadrecords){
         for(Lead leadrecord : Leadrecords)
            {
                Task leadtask = new Task(Subject='Follow up on the lead status',WhoId=leadrecord.id);
                insert leadtask;
            }
    }
}