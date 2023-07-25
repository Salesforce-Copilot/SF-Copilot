import { LightningElement, track, wire } from 'lwc';
import GetConList from '@salesforce/apex/cl_2409_Eg3_GetContact_wire.GetConList';
import { updateRecord } from 'lightning/uiRecordApi';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';

const colm =[
{label:'First Name', fieldName:'FirstName', type:'text' ,editable:true},
{label:'Last Name', fieldName:'LastName', type:'text' ,editable:true},
{label:'Phone', fieldName:'Phone', type:'phone' },
{label:'Email', fieldName:'Email', type:'email' },

];
export default class Lwc_2409_Eg3_lwclds_wire_GetContact extends LightningElement {

    col=colm;
    @wire(GetConList) Mustak;
    @track DraftValues=[];

    HandleSave(event){
        const fields = {};
        fields[ID_FIELD.fieldApiName] = event.detail.DraftValues[0].Id;
        fields[FIRST_NAME_FIELD.fieldApiName] = event.detail.DraftValues[0].FirstName;
        fields[LAST_NAME_FIELD.fieldApiName] = event.detail.DraftValues[0].LastName;

        const recordInput = {fields} ;

        updateRecord(recordInput).then();
    }
}