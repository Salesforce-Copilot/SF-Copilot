/********************************************************************
 * Version         Date               Name             Description
 * ======================================================================
 * V1.0       24/02/2021              Developer1            Add method implemented
 * 
 * 
 *************************************************************************/
public with sharing class Calculator {
    public Calculator() {

    }
  public integer sub(integer a, integer b){
      return a-b;
  }
  public integer add(integer a, integer b)
  {
      return a+b;

  }
}