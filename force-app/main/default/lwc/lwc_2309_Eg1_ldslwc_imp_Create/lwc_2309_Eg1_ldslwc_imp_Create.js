import { LightningElement , track} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class Lwc_2309_Eg1_ldslwc_imp_Create extends LightningElement {
    

@track name;
@track phone
@track fax;
@track industry;

callNm(event){
this.name=event.target.value;
}
callPh(event){
    this.phone=event.target.value;
    }
callFx(event){
        this.fax=event.target.value;
        }
callIn(event){
            this.industry=event.target.value;
            }
callme(event){
    //step====>1 Create fild list
const fields ={'Name':this.name, 'Phone':this.phone, 'Fax':this.fax,'Industry':this.industry};
    //step=====>2 Create API Record with fields            
const recordData={apiName:'Account',fields};
     //step=====>3 Call Imperation           
createRecord(recordData).then(response=>{
alert('Account was created successfully with Account ID :'+ response.id);
}).catch(error=>{
alert('Record creation failed with the following error : '+ error.body.message);
});
                }        

}