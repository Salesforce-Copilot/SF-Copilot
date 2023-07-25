({
	showme : function(component, event, helper) 
          {
	var acc = component.get("v.acc");
    var cn = component.get("v.con");
    var ps = component.get("v.pas");
    console.log("Account Name Entered "+acc.Name);
    console.log("Account Phone Entered "+acc.Phone);
    console.log("Contact First Name Entered "+cn.FirstName);
    console.log("Passenger First Name Entered "+ps.First_Name_del__c);
	      }
})