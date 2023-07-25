import { LightningElement } from 'lwc';

export default class Lwc_2109_Eg3_LWCBasic extends LightningElement {
    name='Sk Mustak Hasan';

callme(event)
{
this.name ='Capgemini India Limited';
}
listenName(event)
{
this.name = event.target.value;
}
}