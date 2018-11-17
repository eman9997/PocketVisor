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

  HtmlBalance:number;
  HtmlAccountType:string;
  HtmlAPR: number;

  constructor(
    private router: Router,
    private firebase:FireserveService,
    ) {

     this.user={
    email: '',
    nameFirst:'',
    nameLast:'',
    accountType: [],
    balance: [],
    APR: []
}
this.onFetch();
}

onSubmit(form: NgForm) {

  // this.HtmlBalance = form.value.HtmlBalance;
  // this.HtmlAccountType = form.value.HtmlaccountType;
  // this.HtmlAPR = form.value.HtmlAPR;


console.log(this.user);

  this.user.balance.unshift(this.HtmlBalance);
  this.user.accountType.unshift(this.HtmlAccountType);
  this.user.APR.unshift(this.HtmlAPR);
  this.user.nameFirst='Emanuel';
  this.user.nameLast='Fonseca';
  this.user.email='eman9997@yahoo.com';

  console.log(this.user);
  
  this.Save();
  this.router.navigate(['/dashboard']);

}



Save(){
  this.firebase.storeServers(this.user)
  .subscribe(
    (response) =>console.log(response),
    (error) =>console.log(error)
    );
}
onFetch(){
  this.firebase.getlist()
  .subscribe(
    (servers: User) =>this.user=servers,
    (error)=> console.log(error)
  );
  }



}