public with sharing class DemoCtrl {
    
    public static Decimal calculate(string operation, Integer num1, Integer num2) {     //demo class1
        switch on operation {
            when 'Add' {
                return num1 + num2;
            }
            when 'Subtract' {
                return num1 - num2;
            }
            when 'Multiply' {
                return num1 * num2;
            }
            when 'Divide' {
                return num1 / num2;
            }
            when else {
                return null;
            }
        }
    }

}