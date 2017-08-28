import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogintComponent } from './logint/logint.component';
import { PublicZoneComponent } from './public-zone/public-zone.component';
import { SupportZoneComponent } from './support-zone/support-zone.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { IssueComponent } from './issue/issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginGuardService } from './login-guard.service'; //ตรวจการเข้า zone ถ้าไม่ login ก้ไม่ให้เข้า
import { FormsModule } from '@angular/forms';
import { TranfPipe } from './tranf.pipe'; //ใช้ทำ ngModel เชื่อมโยงค่าตัวแปรกับ user input
import { HttpModule} from '@angular/http'; //ต่อข้อมูลใน api ให้แสดงใน app

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogintComponent,
    PublicZoneComponent,
    SupportZoneComponent,
    CompanyComponent,
    CompanyListComponent,
    CustomerComponent,
    CustomerListComponent,
    UserComponent,
    UserListComponent,
    IssueComponent,
    IssueListComponent,
    TranfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ใช้ทำ ngModel เชื่อมโยงค่าตัวแปรกับ user input
    HttpModule //ต่อข้อมูลใน api ให้แสดงใน app


  ],
  providers: [LoginGuardService], //ของservice ตรวจการเข้า zone ถ้าไม่ login ก้ไม่ให้เข้า
  bootstrap: [AppComponent]
})
export class AppModule { }
