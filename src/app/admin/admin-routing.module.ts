
import { ViewAllPharmacyComponent } from './view-all-pharmacy/view-all-pharmacy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PharmacyAddComponent } from './pharmacy-add/pharmacy-add.component';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';

import { InquiryComponent } from './inquiry/inquiry.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
      children: [
        {
          path:'',
          pathMatch:'full',
          redirectTo: '/admin/dashboard'
        },
        {
          path:'dashboard',
          pathMatch:'full',
          component: DashboardComponent
        },
        {
          path:'addPharmacy',
          pathMatch:'full',
          component: PharmacyAddComponent
        },
        {
          path:'viewPharmacy',
          pathMatch:'full',
          component: ViewAllPharmacyComponent
        },
        {
          path:'updatepharmacy/:id',
          pathMatch:'full',
          component: UpdatePharmacyComponent
        },
       
        {
          path:'inquiry',
          pathMatch:'full',
          component: InquiryComponent
        },
       
        {
          path:'users',
          pathMatch:'full',
          component: UsersComponent
        }
       
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
