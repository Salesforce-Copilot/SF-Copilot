public class StudentForm02Controller {

public string fname{set;get;}
public string lname{set;get;}
public string mname{set;get;}
public string faname{set;get;}

public StudentForm02Controller(){}

public pagereference CustomSave(){


StudentInfo__c s = new StudentInfo__c();
s.Name=fname+lname;
s.FirstName__c=fname;
s.LastName__c=lname;
s.MotherName__c=mname;
s.FatherName__c=faname;
insert s;
PageReference pg = new PageReference('/' + s.id);
pg.setRedirect(true);
return pg;

}

public void CustomCancel(){}


}