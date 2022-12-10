import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PharmacyAddComponent } from './pharmacy-add/pharmacy-add.component';
import { ViewAllPharmacyComponent } from './view-all-pharmacy/view-all-pharmacy.component';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';

import { InquiryComponent } from './inquiry/inquiry.component';
import { UsersComponent } from './users/users.component';









@NgModule({
 
  declarations: [
    DashboardComponent,
    SidebarComponent,
    PharmacyAddComponent,
    ViewAllPharmacyComponent,
    UpdatePharmacyComponent,

    InquiryComponent,
    UsersComponent,
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
