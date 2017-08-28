import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router'; //ตรวจสอบ zone ที่ใช้ router ถ้าไม่ login ก้ไม่ให้เข้า 
//ใส่Router เพิ่ม เพื่อให้ลิ้งค์ไปหน้า login เลย

@Injectable()
export class LoginGuardService implements CanActivate{ //เพิ่ม implementCanActivate

  constructor(private router:Router) { //ใส่Routerเพิ่ม ถ้ายังไม่login ให้ลิ้งค์ไปหน้าloginเลย


  } 

  canActivate(){ //ตรวจการเข้า zone ถ้าไม่ login ก้ไม่ให้เข้า
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      this.router.navigate(['logint']); //ใส่Routerเพิ่ม ถ้ายังไม่login ให้ลิ้งค์ไปหน้าloginเลย
      return false;
    }
    
  }
}
