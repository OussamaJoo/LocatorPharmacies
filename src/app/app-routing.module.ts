import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { PharmacieDetailComponent } from './pharmacie-detail/pharmacie-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { LtineraireComponent } from './ltineraire/ltineraire.component';
import { LtineraireNightComponent } from './ltineraire-night/ltineraire-night.component';
import { LtineraireParaPharmacieComponent } from './ltineraire-para-pharmacie/ltineraire-para-pharmacie.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent
  },
  { 
    path: 'pharmacie-detail', 
    pathMatch:'full',
    component: PharmacieDetailComponent 
  },
  { 
    path: 'contactUs', 
    pathMatch:'full',
    component: ContactUsComponent 
  },
  { 
    path: 'profile', 
    pathMatch:'full',
    component: ProfileComponent 
  },
  {
    path: 'ltineraire',
    pathMatch: 'full',
    component: LtineraireComponent
  },
  {
    path: 'ltineraireNight',
    pathMatch: 'full',
    component: LtineraireNightComponent
  },
  {
    path: 'ltinerairePara',
    pathMatch: 'full',
    component: LtineraireParaPharmacieComponent
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
