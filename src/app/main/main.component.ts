import { Component, OnInit } from '@angular/core';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(){
  }

  getLabelContent(label: string){
    this.contentService.getLabelContent(label);
  }

}
