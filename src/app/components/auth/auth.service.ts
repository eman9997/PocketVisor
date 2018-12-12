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
