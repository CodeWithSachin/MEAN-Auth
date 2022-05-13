import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { MainComponent } from './Component/main/main.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  { path: 'dashboard', loadChildren: () => import('./Component/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
