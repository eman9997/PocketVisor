import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from './../../models/user.model';
import { FireserveService } from '../../services/fireserve.service';
import { timer } from 'rxjs/observable/timer';
import { Server } from 'selenium-webdriver/safari';






@Component({
  selector: 'app-savemoney',
  templateUrl: './savemoney.component.html',
  styleUrls: ['./savemoney.component.scss']
})
export class SavemoneyComponent implements OnInit {
  user:User;
  recommend:string[];
  i:number;

  constructor(
    private use: UserService,
    private firebase: FireserveService
  ) { }// this is the begining

  ngOnInit() {
    this.user=this.use.model();
    
    this.firebase.getlist().subscribe(
      (server:User)=>{
        this.user=server;
        this.save();
      },
      (error)=> console.log(error)
    );

    this.save();
  }

  // onFetch(){
  //   this.firebase.getlist()
  //   .subscribe(
  //     (servers: User) =>this.user=servers,
  //     (error)=> console.log(error)
  //   );
  //   }
  save(){

 console.log(this.user.balance[1]);

}  // end of save method

}
