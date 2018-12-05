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
  mortPrime:number=4.5;
  cdPrime:number=2;
  buget:number=3000;
  user:User;

  needsLoan:string='Your spending too much money on Interest you will save money if you got a loan. A Loans interest is only '+this.loanPrime+'% right now. If your still having trouble you can refer to the glossary located on dashboard page';

  needsbalancetransfer:string='Your spending too much money on Interest you will save money if you did a balance transfer. If you think you can pay back your debt in a couple of months 6-20 months this is a good option. If you need more details check the glossary';

  needsSavings:string='You should move some Money to your savings or a CD. Ther rate for a cd is at least '+this.cdPrime+'% right now';


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
      if(this.user.balance[i] >this.buget && this.user.accountType[i] ==='CHECKING'){
        this.addtoArray(this.needsbalancetransfer);
      }
      
   } 
   
   
   
}  

  Loan(APR){

  }
  addtoArray(str){
    this.recommend.push(str);
  }

  makeunique(){
    var uniquesArray = [];
var counting = 0;
var found = false;
var i;
var y;


for (i = 0; i < this.recommend.length; i++) {
	for (y = 0; y < uniquesArray.length; y++) {
		if ( this.recommend[i] == uniquesArray[y] ) {
			found = true;
		}
	}
	counting++;
	if (counting == 1 && found == false) {
		uniquesArray.push(this.recommend[i]);
	}
	found = false;
	counting = 0;
}
    return uniquesArray;
  }

}
