import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [CompanyService]
})
export class CompanyListComponent implements OnInit {

  constructor(
    private router:Router,
    private CompanyService: CompanyService
  ) { }

  companyData = [];
  //Search
  searchText = "";
  numPage = 0;
  rowPerPage = 2;
  total =0;
  paging = [];
  


  ngOnInit() {
    // if(localStorage.getItem('company')){
    //   this.companyData = JSON.parse(localStorage.getItem('company'));
    // }
    // this.CompanyService.loadItem().subscribe(
    //   datas => {
    //     this.companyData = datas;
    //   },
    //   err => {
    //     console.log(err);
    //   });
    this.search();
  }

  onAddButtonClick(){
    this.router.navigate(['support','company']);
  }

  onDeleteButtonClick(id){
    this.companyData.splice(id); //ลบทีละตัว
    //localStorage.setItem('company', JSON.stringify(this.companyData)); //ลบออกจาก storerage
    //Materialize.toast('Delete Complete',1000);
    this.CompanyService.deleteItem(id).subscribe(
      datas => {
        Materialize.toast('Delete data complete',1000);
        this.loaddata();
      },
      err => {
        console.log(err);
      });
  }

  onEditButtonClick(id){
    this.router.navigate(['support','company',id]); //รับตัวแปร id 

  }

  loaddata(){
    this.CompanyService.loadItem().subscribe(
      datas => {
        this.companyData = datas;
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
    this.CompanyService.search(searchBody).subscribe(data => {
      this.companyData= data.rows;
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
