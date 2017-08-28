import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';  //ลิ้งค์ไปหน้าอื่นผ่านการกดปุ่ม

@Component({
  selector: 'app-logint',
  templateUrl: './logint.component.html',
  styleUrls: ['./logint.component.css']
})
export class LogintComponent implements OnInit {

  constructor(private router:Router) {  //เพิ่ม private router:Router เพื่อลิ้งค์ไปหน้าอื่นผ่านการกดปุ่ม

   }
   //ประกาศ Propoty email กับ pass //ใช้ทำ ngModel เชื่อมโยงค่าตัวแปรกับ user input
   email:String;
   password:string;
   
  ngOnInit() {
  }

  doLogint(){ //เช็ค error แสดง Alert ตอนกดปุ่ม login
    if($(".invalid").length > 0){
      Materialize.toast('Invalid!!!!', 1000);
    }
    else{
      window.localStorage.setItem('token','login'); //เรียกใช้ CanActivate ตรวจการเข้า zone ถ้าไม่ login ก้ไม่ให้เข้า
      this.router.navigate(['support',"issue-list"]); //เรียกใช้ฟังก์ชั่น ใส่หน้าที่จะลิ้งไป
    }
  }
}
