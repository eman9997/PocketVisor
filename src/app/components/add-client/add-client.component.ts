
import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model'

import{AuthService} from '../auth/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FireserveService } from '../../services/fireserve.service';
import { UserService } from '../../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages'
import { Server } from 'selenium-webdriver/safari';
import { BoxService } from '../../services/box.service';




@Component({

  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']

})

export class AddClientComponent implements OnInit {

  user:User;
  HtmlBalance:number;
  HtmlAPR: number;

  constructor(
    private router: Router,
    private firebase:FireserveService,
    private serserv: UserService,
    private Message:FlashMessagesService,
    public mytype:BoxService
    ) {

      this.user=this.serserv.model();
    
  // This array.length==0 || array.length==null dont fetch
  // because feching on null breaks the code
     this.onFetch();
     
}

ngOnInit(){

  
}



onSubmit(form: NgForm) {

  // this.helper=this.HtmlAccountType.toLocaleUpperCase();
  // this.HtmlAccountType=this.helper;
 
  if(this.HtmlAPR < 12 || this.HtmlBalance > 9000000 ){

  this.user.balance.unshift(this.HtmlBalance);
  this.user.accountType.unshift(this.mytype.accountType);
  this.user.APR.unshift(this.HtmlAPR); 
  this.user.nameFirst='Emanuel';
  this.user.nameLast='Fonseca';
  this.user.email='eman9997@yahoo.com';   


  this.firebase.storeServers(this.user)
  .subscribe((response) =>{

    console.log(response)
    this.router.navigate(['/dashboard']);
  }
    );
    
  } // end of if valid
  

  else{
    this.Message.show('Input Not Valid, Must Enter: Credit Card or Loan or Checking or Savings or Heloc',{
      cssClass: 'alert-danger', timeout: 8000  
    });
  }
 


} // end of submit area



onFetch(){

  this.firebase.getlist()
  .subscribe(
    (servers: User) =>{
      if (servers.balance === undefined || servers.balance.length == 0) {
        this.user=this.serserv.model();
        
       }
       if (servers.balance.length > 0) {
        this.user=servers
        
       }
      (error)=>{
        console.log(error) 
      }  
    }
    
  );

  }




}