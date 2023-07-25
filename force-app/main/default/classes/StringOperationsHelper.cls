public class StringOperationsHelper 
{
	Public static void Concatenate(string s1, string s2)
    {
        system.debug('Concatenation Result is...: '+ (s1 + s2));
    }
    
    Public static void GetStringLength(string str) 
    {
        system.debug('Number of Characters is...: '+ str.length());
    }

	// Text Comparison    
    Public static void CheckEquals(string s1 , string s2) 
    {
        if(s1 == s2)
            system.debug('Both the Strings are Identical.');
        else
            system.debug('Both the Strings are Different.');
    }
    
    // Binary Comparison
    Public static void CheckEqualsWithCase(string s1, string s2)
    {
        if(s1.equals(s2))
            system.debug('Both the Strings are Equals.');
        else
            system.debug('Both the Strings are Different.');  
    }
}