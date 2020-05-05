import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
myInput1:number;
myInput2:number;
sum:number;
today: number = Date.now();
  constructor() { 
    setInterval(() => {this.today = Date.now()}, 1);
    console.log(this.today);
  }

  ngOnInit() {
  }
addition(){
  this.sum=this.myInput1+this.myInput2;
  this.myInput1=null;
  this.myInput2=null;
}

substraction(){
  this.sum=this.myInput1-this.myInput2;
  this.myInput1=null;
  this.myInput2=null;
}

multiplication(){
  this.sum=this.myInput1*this.myInput2;
  this.myInput1=null;
  this.myInput2=null;
}
  
division(){
  this.sum=this.myInput1/this.myInput2;
  this.myInput1=null;
  this.myInput2=null;
}
}
