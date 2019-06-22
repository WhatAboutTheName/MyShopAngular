import { Component, OnInit } from '@angular/core';
import {AnimationService} from '../../service/animation.service';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  constructor(private animationService: AnimationService) { }

  ngOnInit() {
    
  }

  ngAfterContentChecked(){
    this.animationService.addScrollButton();
  }

  scrollTop(){
    this.animationService.scrollTop();
  }
  
}
