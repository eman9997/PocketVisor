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

  
  counter:number=0;

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


}

onSubmit(form: NgForm) {

  // this.HtmlBalance = form.value.HtmlBalance;
  // this.HtmlAccountType = form.value.HtmlaccountType;
  // this.HtmlAPR = form.value.HtmlAPR;

  this.user.balance.push(this.HtmlBalance);
  this.user.accountType.push(this.HtmlAccountType);
  this.user.APR.push(this.HtmlAPR);


  console.log("Im woring....YEEAAAAAAHHH");
  console.log(this.user.balance);
  console.log(this.user.accountType);
  console.log(this.user.APR);

  this.user.nameFirst='Emanuel';
  this.user.nameLast='Fonseca';
  this.user.email='eman9997@yahoo.com';


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




}