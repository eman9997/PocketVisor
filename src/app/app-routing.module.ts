import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlossaryComponent } from './components/glossary/glossary.component';


const routes: Routes = [
  {path: '', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'addclient', component: AddClientComponent },
  {path: 'glossary', component: GlossaryComponent},
  {path: '**', component: PageNotFoundComponent },
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
