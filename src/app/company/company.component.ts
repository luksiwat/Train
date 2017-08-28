import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router'; //เพิ่มActivatedRoute เพื่อgetตัวแปร id หน้าedit comp
import { CompanyService } from '../company.service'; //add data จาก api

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService] //add data จาก api

})
export class CompanyComponent implements OnInit {

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute, //เพิ่มActivatedRoute เพื่อgetตัวแปร id หน้าedit comp
    private CompanyService : CompanyService //add data จาก api
  ) { }

  mode:string= "ADD"; //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
  id:number=0; //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
  compCode:String;
  compName:string;

  ngOnInit() { //เพิ่มActivatedRoute เพื่อgetตัวแปร id หน้าedit comp
    this.activeRoute.params.subscribe(params => {
      if(params['id']){
        let id = params["id"]; 
        // let companyData = JSON.parse(localStorage.getItem('company'));
        // let company = companyData[id];
        this.CompanyService.findById(id).subscribe(company => {
          this.compCode = company.compCode;
          this.compName = company.compName;
        },err => {
          console.log(err);
        });
        
        Materialize.updateTextFields();
        this.mode ="EDIT" //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
        this.id=id; //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd

      }
    })
    
  }

  onSave(){
    let comp = {
      compCode : this.compCode,
      compName : this.compName
    }
    
    let company:Array<any> = [];
    if(localStorage.getItem('company')){
      company= JSON.parse(localStorage.getItem('company'));
    }
    if(this.mode==="EDIT"){  //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
      //company[this.id] = comp; //Edit comp
     
      this.CompanyService.updateItem(this.id,comp).subscribe(
        datas => {
          Materialize.toast('Update Data Complete',1000);
          this.router.navigate(['support','company-list']);
        },
        err => {
          console.log(err);
        });
         
      
    }else{  //หน้าcomp แยกAddกับEdit ถ้ามีid=การEdit ไม่มีid=การAdd
      //company.push(comp);  //Add comp
      this.CompanyService.addItem(comp).subscribe( //add data จาก api
        datas => {
          Materialize.toast('Add new item complete',1000);
        },
        err => {
          console.log(err);
        });
      
        Materialize.toast('Save Complete',1000);
    }

    localStorage.setItem('company',JSON.stringify(company));
 
  }
  

}
