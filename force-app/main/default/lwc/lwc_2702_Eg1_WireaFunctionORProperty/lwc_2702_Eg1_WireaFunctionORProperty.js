import { LightningElement,track,wire } from 'lwc';
import findcontacts from '@salesforce/apex/cl_2709_Eg1_wire2.findcontacts';

export default class Lwc_2702_Eg1_WireaFunctionORProperty extends LightningElement {


    

    @track searchkey;
    
    handleonchange(event)
    {
    this.searchkey = event.target.value;
    }
    
    //********* Wire a Property ***************/
    @wire(findcontacts,{searchtext : '$searchkey'}) contact;
    
    //***********Wire a Function ***********/

}