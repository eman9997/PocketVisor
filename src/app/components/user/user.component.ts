import { Component, OnInit, Input } from '@angular/core';
import {User} from './../../models/user.model';

import {FireserveService} from './../../services/fireserve.service';
import{AuthService} from '../auth/auth.service'
import {Router} from '@angular/router'
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

user:User;

  constructor(  
    private fire:FireserveService,
    private ServiceToLoggout: AuthService,
    private ru:Router,
    private serv: UserService
    ){
      this.user=this.serv.model();
      
     }

  ngOnInit() {
   // this.onFetch();

  //  if(this.user.balance.length==0 ||this.user.balance.length==null ){
  //     this.user=this.serv.model();
  //     this.serv.save(this.user);
  //  }

  }

  login(){
    

  }

  onSave() {
   this.fire.storeServers(this.user)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
      );
  }
  onFetch(){
    this.fire.getlist()
    .subscribe(
      (servers: User) =>this.user=servers,
      (error)=> console.log(error)
    );
  }
 logout(){
  this.ServiceToLoggout.set_uid();
    this.ru.navigate(['/signin']);
 }

}
