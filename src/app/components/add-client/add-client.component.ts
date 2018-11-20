
import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model'
// import {FireserveService} from './../../services/fireserve.service';
import{AuthService} from '../auth/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FireserveService } from '../../services/fireserve.service';
import { UserService } from '../../services/user.service';





@Component({

  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']

})

export class AddClientComponent implements OnInit {

  user:User;
  helper:string;
  HtmlBalance:number;
  HtmlAccountType:string;
  HtmlAPR: number;

  constructor(
    private router: Router,
    private firebase:FireserveService,
    private serserv: UserService

    ) {

     this.user=this.serserv.model();
    
  // This array.length==0 || array.length==null dont fetch
  // because feching on null breaks the code
     this.onFetch();
     

}

ngOnInit(){

  
}



onSubmit(form: NgForm) {

  this.helper=this.HtmlAccountType.toLocaleUpperCase();
  this.HtmlAccountType=this.helper;

  this.user.balance.unshift(this.HtmlBalance);
  this.user.accountType.unshift(this.HtmlAccountType);
  this.user.APR.unshift(this.HtmlAPR);


  this.user.nameFirst='Emanuel';
  this.user.nameLast='Fonseca';
  this.user.email='eman9997@yahoo.com';

    this.serserv.save(this.user);
  this.router.navigate(['/dashboard']);


}



onFetch(){

  this.firebase.getlist()
  .subscribe(
    (servers: User) =>this.user=servers,
    (error)=> console.log(error)

  );



  }





}