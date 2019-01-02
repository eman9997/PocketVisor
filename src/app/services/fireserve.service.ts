import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import { Server } from 'selenium-webdriver/safari';
import {User} from './../models/user.model';
import { database } from 'firebase';
import {AuthService} from './../components/auth/auth.service';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FireserveService {
  url:string='https://list-86b44.firebaseio.com/';
  
    constructor(
              private http: Http,
              private uidFromUser: AuthService
              ) {
                
               }

    storeServers(servers: User){
      const token =this.uidFromUser.getToken();

       return this.http.put(this.url+this.uidFromUser.getUid()+'/data.json?auth='+token, servers);
       
    }
    getlist(){
      const token =this.uidFromUser.getToken();
      return this.http.get(this.url+this.uidFromUser.getUid()+'/data.json?auth='+token)
      .map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(console.log(Response));
        }
      );
    }

  

}
