({
	callme : function(component, event, helper) 
       {
	 var col = 	[
         		{label: 'AccountName', fieldName: 'Name', type:'text'},
         		{label: 'Phone', fieldName: 'Phone', type:'text'},
         		{label: 'Rating', fieldName: 'Rating', type:'text'},
     			];
         component.set("v.acolumns",col);
	  },
    showme : function(component, event, helper) 
        {
   var acc = event.getParam("acc");	
   var accounts = component.get("v.accounts");   // To Retain existing data -- Pull the existing data from Comp
   accounts.push(acc); 						 // To Retain existing data -- Push the data recieved from Event attribute
   component.set("v.accounts",accounts);		
	    }
})