import { LightningElement } from 'lwc';

export default class Lwc_0702_Eg4_Greater3Num extends LightningElement {

 Num1;
 Num2;
 Num3;

/*firstnum(event){
this.Num1 = event.target.value;
}
secondnum(event){
    this.Num2 = event.target.value;  
}
thirdnum(event){
    this.Num3 = event.target.value;
} */
Capturedata(event)
{
const wh = event.target.name;
if(wh == 'aval')
{
this.Num1 = event.target.value;
}
else if(wh == 'bval')
{
this.Num2 = event.target.value;
}
else
{
this.Num3 = event.targer.value;
}
}
calculateme(event)
{
const a = parseInt(this.Num1);
const b = parseInt(this.Num2);
const c = parseInt(this.Num3);
if(a>b && a>c)
{
alert('the greater number is ' +a);
}
else if(b>a && b>c){
alert('The greater number is '+b);
}
else{
alert('the greater number is '+c);
}
}
clearme(event){
this.Num1='';
this.Num2=null;
this.Num3=null;
}
}