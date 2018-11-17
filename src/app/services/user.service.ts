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
  onFetch(user: User){
    this.fire.getlist()
    .subscribe(
      (servers: User) =>user=servers,
      (error)=> console.log(error)
    );
  }

}
