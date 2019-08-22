import { Component, OnInit, ViewChild, AfterViewInit, Renderer} from '@angular/core';
import { Router } from '@angular/router';
import { Directive, ElementRef} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { BoxService } from '../../services/box.service';



@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit, AfterViewInit {

  mystuff:any;

  @ViewChild('fade') myfade;

  myaccount:string;

  constructor(
    public router: Router,
    private Message:FlashMessagesService,
    private renderer: Renderer,
    public type:BoxService
    ) {
    
      
    
     }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
  

  }


  onClick(name){
    this.startchange(this.changepage);
    this.type.accountType=name;

  }
  startchange=(changepage)=>{
    this.myfade.nativeElement.style.transitionDuration="1s";
    this.myfade.nativeElement.classList.add('fade');
    
    setTimeout( function(){
      changepage();
    }, 2000 );
    
  }
  changepage=()=>{
    this.router.navigate(['/addclient']);
  }

}
