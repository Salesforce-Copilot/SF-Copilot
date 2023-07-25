({
	helperSave : function(component, event, helper) {
		alert('enter into save helper save method');
        var action = component.get("c.m1");
        action.setParams({
            fName1 : component.get("v.fName"),
            lName1 : component.get("v.lName"),
            mName1 : component.get("v.mName"),
            fatherName1 : component.get("v.fatherName")});
	$A.enqueueAction(action);
    
    },
    
    helperCancel : function(component, event, helper) {
        
    }
})