import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model'
// import {FireserveService} from './../../services/fireserve.service';
import{AuthService} from '../auth/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FireserveService } from '../../services/fireserve.service';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  ngOnInit(){
   
  }

  user:User;
  use:User;

  
  counter:number=0;

  constructor(
    private router: Router,
    private firebase:FireserveService,
    ) {
     this.user={
    email: '',
    nameFirst:'',
    nameLast:'',

    Accounts:{
      1:{
        balance: 0,
        accountType:'',
        myDate: '',
        APR: 0,
    },
      2:{
        balance: 0,
        accountType:'',
        myDate: '',
        APR: 0,
    },
      3:{
        balance: 0,
        accountType:'',
        myDate: '',
        APR: 0,
    }

    }
   

}
this.Save();

}

onSubmit(form: NgForm) {

   this.user.Accounts
  const password = form.value.password;
  this.router.navigate(['/user']);
this.Save();
}



Save(){
  this.firebase.storeServers(this.user)
  .subscribe(
    (response) =>console.log(response),
    (error) =>console.log(error)
    );
}


}