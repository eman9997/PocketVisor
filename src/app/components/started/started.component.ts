import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model'
import { FireserveService } from '../../services/fireserve.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.scss']
})
export class StartedComponent implements OnInit {

  user:User;

  constructor(
    private firebase:FireserveService,
    private serserv: UserService,
    private router: Router,
    ) { 
      
     // this.user=this.serserv.dummy();
   
    }

  ngOnInit() {
  }

  adddummy(){


    this.router.navigate(['/dashboard']);
  
  
  }

  }


