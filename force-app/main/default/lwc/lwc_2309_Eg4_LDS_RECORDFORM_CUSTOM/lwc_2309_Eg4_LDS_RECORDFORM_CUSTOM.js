import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_FAX from '@salesforce/schema/Account.Fax';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';

export default class Lwc_2309_Eg4_LDS_RECORDFORM_CUSTOM extends LightningElement {

    @api recordId;
    objectnm = ACCOUNT_OBJECT;
    myfields=[ACCOUNT_NAME,ACCOUNT_FAX,ACCOUNT_RATING];

}