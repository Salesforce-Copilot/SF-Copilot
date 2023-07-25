({
	callme : function(component, event, helper) 
       {
    var nmmm = component.get("v.nm");
    var evt=component.getEvent("second");
    evt.setParams({"empname":nmmm});
    evt.fire();
	   },
    CHILDME: function(component, event, helper) 
       {
	alert('HI , i AM CHILD , i fired the event and this is also handled by me');
	   }
})