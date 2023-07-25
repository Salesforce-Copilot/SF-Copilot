import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
  //compute date difference
  get capitalizedGreeting() {   
   
  }
  //get all the image with alternate text
  //add the red border color
  get redBorder(){  
   
  }   
}