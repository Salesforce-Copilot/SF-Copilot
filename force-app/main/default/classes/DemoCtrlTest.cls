@isTest
public class DemoCtrlTest {
    @isTest
    static void testAddition(){
        Decimal result = Democtrl.calculate('Add', 2, 3);
        System.assertEquals(5, result);
        System.assert(5 == result);
        
    }

}