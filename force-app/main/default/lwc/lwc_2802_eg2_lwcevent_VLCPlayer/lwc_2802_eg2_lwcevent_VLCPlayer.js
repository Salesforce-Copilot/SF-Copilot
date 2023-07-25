import { LightningElement } from 'lwc';

export default class Lwc_2802_eg2_lwcevent_VLCPlayer extends LightningElement {

vol=0;
con='Please click button to Activate';
    handleVolDecrease(event){
this.con=event.detail;
if(this.vol>0)
{
    this.vol=this.vol-1;
}
    }
    handleVolIncrease(event)
    {
        this.con=event.detail;
if(this.vol<101){
    this.vol = this.vol+1;
}

    }
}