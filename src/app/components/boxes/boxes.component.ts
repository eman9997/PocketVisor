import { Component, OnInit, ViewChild, AfterViewInit, Renderer} from '@angular/core';
import { Router } from '@angular/router';
import { Directive, ElementRef} from '@angular/core';
import { UserService } from '../../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages'
import { User } from '../../models/user.model';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit, AfterViewInit {

  halfuser:User;
  mystuff:any;

  @ViewChild('fade') myfade;


  constructor(
    public router: Router,
    private serserv: UserService,
    private Message:FlashMessagesService,
    private renderer: Renderer
    ) {
      router=router;

     }

  ngOnInit() {

    this.halfuser=this.serserv.model();
    // bring in the HTML container
    // this.mystuff=document.getElementsByClassName("container");
    
  }
  ngAfterViewInit(){
    // Dom manipulation

    // this.renderer.setStyle(
    //   this.myfade.nativeElement,
    //   "background",
    //   "red"
    // );

    // this.renderer.setStyle(
    //   this.myfade.nativeElement,
    //   "transition",
    //   "0.5s");

  }


  onClick(name){
    this.startchange()
    setTimeout(function(){
       this.router.navigate(['/']);
      

      }, 3000);
      
    
    this.halfuser.accountType=name;

    console.log("you clicked "+name);
    
  }

  startchange=()=>{
    this.myfade.nativeElement.style.transitionDuration="1s";
    this.myfade.nativeElement.classList.add('fade');
  }


}
