import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  value:string;
  constructor(private ru:Router){ }
  


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
          console.log(response)
          this.ru.navigate(['/dashboard']);
        } 
      )
      .catch(
        error => console.log(error)
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
  
}
