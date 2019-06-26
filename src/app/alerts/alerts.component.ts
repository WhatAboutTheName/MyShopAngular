import { Component, OnInit } from '@angular/core';
import {ContentService} from '../service/content.service';
import { alert } from '../animation/animation';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  animations: [alert]
})
export class AlertsComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

}
