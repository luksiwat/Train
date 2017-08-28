import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { LoginGuardService } from './login-guard.service';

const routes: Routes = [
  {
    path: '', 
    component: PublicZoneComponent,
    children: [{
      path: '', component: HomeComponent //default หน้าแรกให้เป็น home
    },{
      path: 'home', component: HomeComponent
    },{
      path: 'logint', component: LogintComponent
    }]
  },
  {
      path: 'support',component: SupportZoneComponent,
      canActivate: [LoginGuardService], //ตรวจการเข้า zone ถ้าไม่ login ก้ไม่ให้เข้า
      children: [{
      path: '', component:IssueListComponent
    },{
      path: 'company', component:CompanyComponent
    },{
      path: 'company/:id', component:CompanyComponent  //ถ้าเข้าผ่านurl ให้เรียกใช้ผ่านตัวแปร id ของหน้า edit comp
    },{
      path: 'company-list', component: CompanyListComponent
    },{
      path: 'customer', component: CustomerComponent
    },{
      path: 'customer-list', component: CustomerListComponent
    },{
      path: 'user', component: UserComponent
    },{
      path: 'user/:id', component:UserComponent  //ถ้าเข้าผ่านurl ให้เรียกใช้ผ่านตัวแปร id ของหน้า edit comp
    },{
      path: 'user-list', component: UserListComponent
    },{
      path: 'issue', component: IssueComponent
    },{
      path: 'issue-list', component: IssueListComponent
    }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
