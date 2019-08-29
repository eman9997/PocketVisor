import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from './../../models/user.model';
import { FireserveService } from '../../services/fireserve.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';


@Component({
  selector: 'app-savemoney',
  templateUrl: './savemoney.component.html',
  styleUrls: ['./savemoney.component.scss']
})
export class SavemoneyComponent implements OnInit {
  recommend:string[];  // where all the results are
   
  myset:any;
  loanPrime:number=10;
  calculate:number=0;
  helocPrime:number=5;
  mortPrime:number=4.7;
  cdPrime:number=1.8;
  autoPrime:number=4.9;
  buget:number=3000;
  user:User;
  str:string;


 
  needsLoan:string='Your spending Too Much Money on Interest you will save money if you got a Loan. A Loans interest is only '+this.loanPrime+'% right now. If your still having trouble you can refer to the glossary located on dashboard page';
  needsbalancetransfer:string='Your spending too much money on Interest you will save money if you did a balance transfer. If you think you can pay back your debt in a couple of months 12-20 months this is a good option. If you need more details check the glossary';
  needsSavings:string='You should move some Money to your savings or a CD. The rate for a CD is at Least '+this.cdPrime+'% Right Now';
  needsRefinance:string='You Should Refinance your House. Your paying to much interest on your mortgage. Look under Refinance in the glossary for more details';
  needsAutoRefi:string='Refinance your Autoloan, Your paying to much interest on your Autoloan. The Glossary will tell you the Many reason one may Refinance an Auto Loan';
  needsLoanRefi:string='The Loan you have has a high interest rate. You might want to refinance it';



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
    
        // checking if a loan is needed
      if(this.user.APR[i]>this.loanPrime+2 && this.user.balance[i]>this.buget){
        if(this.user.accountType[i] =='Credit Card'){
          this.addtoArray(this.needsLoan);
         }
       
      }
      // needs a balance transfer
     if(this.user.APR[i]>this.loanPrime+2  && this.user.balance[i]>this.buget){
       if(this.user.accountType[i] =='Credit Card'){
        this.addtoArray(this.needsbalancetransfer);
       }
         
      }
      // savings account
      if(this.user.balance[i] >this.buget && this.user.accountType[i] =='Checking'){
        this.addtoArray(this.needsSavings);
      }
      // Refinance
      if(this.user.APR[i]>this.mortPrime+1 && this.user.accountType[i] =='Mortgage'){
        this.addtoArray(this.needsRefinance);
      }
     
      //refiLoan
      if(this.user.APR[i]>this.loanPrime+1 && this.user.accountType[i] =='Loan'){
        this.addtoArray(this.needsLoanRefi);
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
  }

 

}
