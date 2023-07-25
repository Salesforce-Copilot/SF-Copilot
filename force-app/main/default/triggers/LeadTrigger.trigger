trigger LeadTrigger on Lead (before insert,after insert, before update,after update) {
    
    switch on Trigger.operationType{
        when before_insert{
            LeadHandler.beforeInsertHandler(trigger.new);   
        }
        when before_update{
            LeadHandler.beforeUpdateHandler(trigger.new,trigger.oldMap); 
        }
        when AFTER_INSERT{
           LeadHandler.afterInsertHandler(trigger.new);
        }
        //system.debug('Lead is created');
        //system.debug('Trigger Size'+ trigger.size);
        //system.debug('is trigger'+Trigger.isExecuting);
        //system.debug('Operation Type'+Trigger.operationtype);
        
        
        
    }
}