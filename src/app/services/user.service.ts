import { Injectable } from '@angular/core';
import{User} from './../models/user.model'
import { FireserveService } from './fireserve.service';

@Injectable()
export class UserService {
  user:User;

  constructor(private fire:FireserveService) {
    
   }

  save(user: User){
    this.fire.storeServers(user)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
      );

  }
  onFetch():User{
    this.fire.getlist()
    .subscribe(
      (servers: User) =>this.user=servers,
      (error)=> console.log(error)
    );
    return this.user;
  }
  model(){

    this.user={
      email: '',
      nameFirst:'',
      nameLast:'',
      accountType: [],
      balance: [],
      APR: []
  }
    return this.user;
  }


}
