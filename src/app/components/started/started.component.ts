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
      
      this.user=this.serserv.dummy();
      console.log(this.user);
      this.user.nameFirst='Emanuel';
      this.user.nameLast='Fonseca';
      this.user.email='eman9997@yahoo.com';
    
        this.serserv.save(this.user);

    }

  ngOnInit() {
  }

  adddummy(){

    this.user.nameFirst='Emanuel';
    this.user.nameLast='Fonseca';
    this.user.email='eman9997@yahoo.com';
  
    this.serserv.save(this.user);

    this.router.navigate(['/dashboard']);
  
  
  }

  }


