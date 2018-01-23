import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //comentarios 
  title = 'app';
  private  num1: number = 5;
  private  num2: number  = 5;
  private  resultado: string = "";

  constructor(){
    this.resultado = "el resultado es " + (this.num1+this.num2);
    console.log(this);
  }


}
