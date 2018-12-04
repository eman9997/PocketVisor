import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from './../../models/user.model';
import { FireserveService } from '../../services/fireserve.service';




@Component({
  selector: 'app-savemoney',
  templateUrl: './savemoney.component.html',
  styleUrls: ['./savemoney.component.scss']
})
export class SavemoneyComponent implements OnInit {
  recommend:string[];  // where all the results are
 
  loanPrime:number=8;
  helocPrime:number=5;
  cdPrime:number=2;
  buget:number=3000;
  user:User;
  needsLoan:string='Your spending too much money on Interest you will save money if you got a loan';

  constructor(
    private use: UserService,
    private firebase: FireserveService
  ) { }// this is the begining

  ngOnInit() {
    this.user=this.use.model();
    this.recommend=[];
    
    this.firebase.getlist().subscribe(
      (server:User)=>{
        this.user=server;
        this.savemoney();
      },
      (error)=> console.log(error)
    );

   
  }


  savemoney(){
    var i;
   for(i=0; i<this.user.balance.length; i++){
    // this.user.balance[i];
    // this.user.accountType[i];
    // this.user.APR[i];

        // checking if a loan is needed
      if(this.user.APR[i]>10){
        this.addtoArray(this.needsLoan);
          console.log('I found an APR Greater than 10');
      }
   } // end of For loop
   console.log(this.recommend);
}  

  Loan(APR){

  }
  addtoArray(str){
    this.recommend.push(str);
  }

}
