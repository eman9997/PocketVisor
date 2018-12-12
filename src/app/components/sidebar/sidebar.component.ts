import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private logservice:AuthService,
    
    

  ) { }

  ngOnInit() {
    
  }

  logoff(){
    this.logservice.log_out;
    this.router.navigate(['/']);
  }
}
