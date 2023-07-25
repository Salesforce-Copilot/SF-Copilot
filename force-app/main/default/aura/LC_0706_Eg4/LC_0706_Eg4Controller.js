({
	showme : function(component, event, helper) 
    {
//Step1 -- Get The Method
var action = component.get("c.Givedata");
//Step 2 --- Pass Params
//Step 3 --- Invoke/Call the function/Method     action.setCallback(this,function(response){});
action.setCallback(this,function(response)
      {
var state=response.getState();        // 3.1 Get the status of Invoke
if(state=='SUCCESS')
{
var res = response.getReturnValue();  // 3.2 Get the result/val/response from SSC
component.set("v.acc",res);
}
});
//Step 4  --- Enqueue Action  $A.enqueueAction();
$A.enqueueAction(action);
},
callme : function(component, event, helper) 
    {
		
	}
})