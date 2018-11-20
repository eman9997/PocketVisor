import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from '@angular/forms'
import {environment} from '../environments/environment';
import {FireserveService} from './services/fireserve.service';

import {HttpModule} from '@angular/http';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './components/auth/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import {UserService} from './services/user.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlossaryComponent } from './components/glossary/glossary.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    AddClientComponent,
    PageNotFoundComponent,
    GlossaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FireserveService, AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
