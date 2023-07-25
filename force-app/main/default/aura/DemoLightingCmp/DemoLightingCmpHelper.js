({
	createUserInfo : function(component,event,helper) {
        
        alert('enter into helper===');
        //Step1
		var action = component.get("c.createUserInfo");
        //step2
        action.setParams({ fname : component.get("v.firstName"), 
                           lname : component.get("v.lastName")});
      
       action.setCallback(this, function(response){
            var state = response.getState(); // get the response state
           // alert('state is==='+state);
            if(state == 'SUCCESS') {
             // alert(response.getReturnValue());
           var navEvt = $A.get("e.force:navigateToSObject");
     
             navEvt.setParams({
             "recordId": response.getReturnValue()
             });
             navEvt.fire(); 
            }
           });
        
        //step3
       $A.enqueueAction(action);        
        
        
	}
})