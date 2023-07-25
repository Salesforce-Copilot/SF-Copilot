({
	doClick : function(component, event, helper) {
        alert(component.isValid());
        alert(component.getName());
        alert(component.get("v.whom"));
        //set-2 parameters
        //key and attribute
        //value - That we wanted to be set in the Attribute
		component.set("v.whom","SFDC Welcome");
        var ageComp=component.find('testInput');
        alert(ageComp.get("v.value"));
        ageComp.set("v.value","67");
	}
})