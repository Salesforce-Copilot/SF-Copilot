({
 gm : function(component, event, helper) 
    {
  component.set("v.msg1","Good Morning");
  helper.MyHelper(component);
	},
 gn : function(component, event, helper) 
    {
  component.set("v.msg1","Good Evening");
  helper.MyHelper(component);
	}
})