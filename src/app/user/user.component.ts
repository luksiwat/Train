import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //เพิ่มActivatedRoute เพื่อgetตัวแปร id หน้าedit comp
import { UserService } from '../user.service'; //add data จาก api

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute, //เพิ่มActivatedRoute เพื่อgetตัวแปร id หน้าedit comp
    private UserService: UserService
  ) { }

  mode: string = "ADD"; //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
  id: number = 0; //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
  userCode: String;
  userName: string;
  userType: string;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        let id = params["id"];
        // let companyData = JSON.parse(localStorage.getItem('company'));
        // let company = companyData[id];
        this.UserService.findById(id).subscribe(users => {
          this.userCode = users.userCode;
          this.userName = users.userName;
          this.userType = users.userType;

        }, err => {
          console.log(err);
        });

        Materialize.updateTextFields();
        this.mode = "EDIT" //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
        this.id = id; //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd

      }
    })
  }


  onSave() {
    let users = {
      userCode: this.userCode,
      userName: this.userName,
      userType: this.userType
    }

    let user: Array<any> = [];
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));
    }
    if (this.mode === "EDIT") {  //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
      //company[this.id] = comp; //Edit comp

      this.UserService.updateItem(this.id, users).subscribe(
        datas => {
          Materialize.toast('Update Data Complete', 1000);
          this.router.navigate(['support', 'user-list']);
        },
        err => {
          console.log(err);
        });


    } else {  //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
      //company.push(comp);  //Add comp
      this.UserService.addItem(users).subscribe( //add data จาก api
        datas => {
          Materialize.toast('Add new item complete', 1000);
        },
        err => {
          console.log(err);
        });

      Materialize.toast('Save Complete', 1000);
    }

    localStorage.setItem('user', JSON.stringify(user));

  }
}
