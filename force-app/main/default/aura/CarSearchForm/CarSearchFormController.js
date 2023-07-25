({
	ToggleButton : function(component, event, helper) {
		var currentValue= component.get("v.isNewAvailable");
        if(currentValue){
            component.set("v.isNewAvailable","false");
        }
        else {
            component.set("v.isNewAvailable","true");
        }
	} ,
    
    newValueSelected : function(component, event, helper) {
		var carTypeId= component.find("carTypeList").get("v.value"); 
    }
})