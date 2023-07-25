import { LightningElement , api } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
export default class Lwc_2409_Eg1_ldslwc_imp_delete extends LightningElement {
   
@api recordId;

deleteme(event)
{
deleteRecord(this.recordId).then(response=>{
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'home',
        },
    });
}).catch(error=>{
    const event = new ShowToastEvent({
        title: 'Error Deleting Account',
        message: 'Cannot delete the Account' + error.body.message,
    });
    this.dispatchEvent(event);

});
}
}