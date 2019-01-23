import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable()
export class AuthService {
  value:string;
  token:string;
  constructor(
    private ru:Router,
    public Message:FlashMessagesService
    ){ }
  


  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
      
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response =>{
    
          firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) =>{
              this.token=token
              this.ru.navigate(['/dashboard']);
            } 
          )
        } 
      )
      .catch(
        error =>{
        console.log("I show up when you dont get logged in")
        this.Message.show('Wrong Email or Password Please Try Again',{
          cssClass: 'alert-danger', timeout: 4000  
        });

        }
      );
     
   //   console.log(this.value); this worked
  }
  getUid():string{
    return this.value=firebase.auth().currentUser.uid;
    
  }

  log_out(){
    firebase.auth().signOut;
   }
   set_uid(){
     this.value=null;
   }
   getToken(){
    firebase.auth().currentUser.getIdToken()
     .then(
      (token: string) =>
        this.token=token
     );
     return this.token;
   }
  
}
