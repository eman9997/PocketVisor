import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { AddClientComponent } from './components/add-client/add-client.component';

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'addclient', component: AddClientComponent },
  {path: 'signin', component: SigninComponent },
  
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
