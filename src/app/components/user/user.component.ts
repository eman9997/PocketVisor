import { Component, OnInit, Input } from '@angular/core';
import {User} from './../../models/user.model';
import {FireserveService} from './../../services/fireserve.service';
import{AuthService} from '../auth/auth.service'
import {Router} from '@angular/router'
import { UserService } from '../../services/user.service';
import { timeInterval } from 'rxjs/operator/timeInterval';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  inde: number;

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
   
    this.fire.getlist().subscribe(
      (server:User)=>{
        this.user=server;
      },
      (error)=> console.log("Problem getting your users from firebase error type: =>  "+error)
    );

 

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
 
    

//  logout(){
//   this.ServiceToLoggout.log_out;

//     this.ru.navigate(['/']);
//  }
 onedit(i){
  this.inde=i;

  this.user.APR.splice(this.inde,1);
  this.user.balance.splice(this.inde,1);
  this.user.accountType.splice(this.inde,1);
  this.onSave();
 }

}
