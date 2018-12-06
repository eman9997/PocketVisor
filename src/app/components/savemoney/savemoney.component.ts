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
   
  myset:any;
  loanPrime:number=8;
  helocPrime:number=5;
  mortPrime:number=4.7;
  cdPrime:number=2;
  buget:number=3000;
  user:User;

  needsLoan:string='Your spending too much money on Interest you will save money if you got a loan. A Loans interest is only '+this.loanPrime+'% right now. If your still having trouble you can refer to the glossary located on dashboard page';

  needsbalancetransfer:string='Your spending too much money on Interest you will save money if you did a balance transfer. If you think you can pay back your debt in a couple of months 6-20 months this is a good option. If you need more details check the glossary';

  needsSavings:string='You should move some Money to your savings or a CD. The rate for a cd is at least '+this.cdPrime+'% right now';

  needsRefinance:string='';



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
      if(this.user.APR[i]>this.loanPrime+2 && this.user.balance[i]>this.buget){
        this.addtoArray(this.needsLoan);
      }
      // needs a balance transfer
     if(this.user.APR[i]>this.loanPrime+2  && this.user.balance[i]>this.buget){
        this.addtoArray(this.needsbalancetransfer);
      }
      // savings account
    //  this.user.balance[i] >this.buget && 
      if(this.user.balance[i] >this.buget && this.user.accountType[i] =='CHECKING'){
        this.addtoArray(this.needsSavings);
      }
      // Refinance
      if(this.user.APR[i]>this.mortPrime+1 && this.user.accountType[i] =='MORTGAGE'){
        this.addtoArray(this.needsSavings);
      }
      
   } // end of for loop
   
   this.createunique();
   console.log(this.recommend);
}  

 
  addtoArray(str){
    this.recommend.push(str);
  }
  createunique(){

    this.myset=new Set(this.recommend);
    this.recommend=Array.from(this.myset);

   // this.recommend=this.myset;
  // let array = Array.from(mySet);
  }

 

}
