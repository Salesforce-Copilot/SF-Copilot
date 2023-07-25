({
	doInit : function(component, event, helper) {
        /* step1*/
		var action = component.get('c.getContactList');
	/* optional /* step 2 */
        action.setParams({
           accountId : component.get('v.recordId'),
        });
    /* Step-4*/
        action.setCallback(this, function(response){
                           var responseValue = response.getReturnValue();
        					console.log('responseValue',responseValue);
        					component.set('v.contactList',responseValue);                   
        });
    /* step 3 */
    $A.enqueueAction(action,false);
    
    
    }
})