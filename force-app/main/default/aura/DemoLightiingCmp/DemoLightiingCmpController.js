({
	customSave : function(component, event, helper) {
		alert('enter into this method'+component.get("v.fName"));
        helper.helperSave(component, event, helper);
	},
    
    
    customCancel : function(component, event, helper) {
	alert('enter into this method'+component.get("v.fName"));
        helper.helperSave(component, event, helper);	
	}
})