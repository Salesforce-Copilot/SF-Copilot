import { LightningElement } from 'lwc';

export default class Lwc_2802_lwcevent_declaratively extends LightningElement {

    dechandler(event)
    {
        //step-1 : Create event /with data
        const inc = new CustomEvent('decrease',{detail:'Vol Control'});
        //step-2 : Dispatch Event
        this.dispatchEvent(inc);

    }
    Inchandler(event){
        this.dispatchEvent(new CustomEvent('increase',{detail:'Mustak'}));

    }
}