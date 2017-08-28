import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  constructor(
    private router: Router,
    private UserService: UserService
  ) { }

  userData = [];
  searchText = "";
  numPage = 0;
  rowPerPage = 4;
  total =0;
  paging = [];

  ngOnInit() {

    this.search();

  }
  onAddButtonClick() {
    this.router.navigate(['support', 'user']);
  }

  onEditButtonClick(id){
    this.router.navigate(['support','user',id]); //รับตัวแปร id 

  }

  onDeleteButtonClick(id){
    this.userData.splice(id); //ลบทีละตัว
    this.UserService.deleteItem(id).subscribe(
      datas => {
        Materialize.toast('Delete data complete',1000);
        this.ngOnInit();
      },
      err => {
        console.log(err);
      });
  }

  loaddata(){
    this.UserService.loadItem().subscribe(
      datas => {
        this.userData = datas;
      },
      err => {
        console.log(err);
      });
  }

  search(){
    let searchBody = {
      searchText : this.searchText,
      rowPerPage : this.rowPerPage,
      numPage : this.numPage
    }
    this.UserService.search(searchBody).subscribe(data => {
      this.userData= data.rows;
      this.total = data.total;
      this.renderPaging();
    },err => {
      console.log(err);
    });
  }

  renderPaging(){
    console.log(this.total);
    console.log(this.rowPerPage);
    let allPage = Math.ceil(this.total / this.rowPerPage);
    this.paging = [];
    for(let i=0; i<allPage;i++){
      this.paging.push(i+1);
    }
  }

  gotoPage(pId){
    this.numPage = pId;
    this.search();
  }
  
}


