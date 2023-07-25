({
CreateAccHelper : function(component) 
    {
var name= component.get("v.name");
var phone= component.get("v.phone");
var industry= component.get("v.industry");
var rating= component.get("v.rating");
//Step1: Call/Get the SSC Method
var action = component.get("c.createAccount");
//Step2: Pass the Params
action.setParams({"name":name,"rating":rating,"phone":phone,"industry":industry});
//Step3: Invoke The SSC Method
action.setCallback(this,function(response){
var st = response.getState();      		//Step 3.1 Get the state
if(st=='SUCCESS')
            {
var res = response.getReturnValue();		//Step 3.2 Get the Response from SSC Method
//alert(res); 
component.set("v.flag",true);
component.set("v.result",res);			// Step 3.2 - Do what ever you want with the response 	
            }
else if(st=='ERROR')
            {
alert('Plaese Try Again'); 
//component.set("v.flag",false);
//component.set("v.result",res);
            }
        });
        
//Step4: Enqueue/Pipeline the Method
$A.enqueueAction(action); 
	}
})