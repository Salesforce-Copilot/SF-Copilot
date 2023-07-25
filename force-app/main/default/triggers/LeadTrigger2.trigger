trigger LeadTrigger2 on Lead (before insert,before update) {

    for(Lead LeadRecord : trigger.new){
        
        if(String.isBlank(LeadRecord.Rating)){
        LeadRecord.Rating = 'Warm';
        }
}
}