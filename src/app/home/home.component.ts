import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

title:string = "This is a title";
//show:boolean = false;
list = ["one","two","three"];
isActive:boolean = true;
conditionExpression="A";
case1Exp = "B"
//price:number = 12346789 //ตัวอย่าง built in pipe
currentDate = new Date();
;


  ngOnInit() {
  }
  
  onclick(){
    this.title="click...";
    //this.show= !true.show;
    this.isActive= !this.isActive;

  }


}
