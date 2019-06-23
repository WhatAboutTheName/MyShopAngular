import { Component, OnInit } from '@angular/core';
import {ScrollService} from '../../service/scroll.service';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    this.scrollService.addScrollButton();
  }

  scrollTop(){
    this.scrollService.scrollTop();
  }
  
}
