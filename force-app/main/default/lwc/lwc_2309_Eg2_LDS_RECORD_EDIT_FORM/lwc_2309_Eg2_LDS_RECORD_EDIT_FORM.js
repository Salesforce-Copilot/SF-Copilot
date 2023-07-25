import { api, LightningElement } from 'lwc';

export default class Lwc_2309_Eg2_LDS_RECORD_EDIT_FORM extends LightningElement {
    @api recordId;

    callme(event){

        const inputFields = this.template.querySelectorAll('lightning-input-field') ;
        inputFields.forEach(field=>{field.reset();});

    }
}