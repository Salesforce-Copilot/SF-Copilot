({
	callme : function(component, event, helper) 
        {
	var newacc = component.get("v.newAccount");
    var myevt = component.getEvent("rupom");
    myevt.setParams({"acc":newacc});
    myevt.fire();
	    },
    clearme : function(component, event, helper) 
       {
	component.set("v.newAccount.Name",null);	
    component.set("v.newAccount.Phone",null);	
	component.set("v.newAccount.Rating",null);	
    location.reload();
	  }
})