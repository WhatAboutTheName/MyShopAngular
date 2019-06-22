import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../service/content.service';

@Component({
  selector: 'app-label-content',
  templateUrl: './label-content.component.html',
  styleUrls: ['./label-content.component.scss']
})
export class LabelContentComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.addContent();
  }

  addProduct(event: {id: number, amount: number}){
    this.contentService.addProduct(event.id, event.amount);
  } 
  
}
