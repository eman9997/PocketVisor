import * as firebase from 'firebase';



export class AuthService {
  value:string;
  

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
      
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
      this.value = firebase.auth().currentUser.uid;
   //   console.log(this.value); this worked
  }
  getUid():string{
    return this.value=firebase.auth().currentUser.uid;
  }

  log_out(){
    this.value=null;
   }
   set_uid(){
     this.value=null;
   }
  
}
