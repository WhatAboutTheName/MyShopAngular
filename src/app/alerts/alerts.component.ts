import { Component, OnInit } from '@angular/core';
import {ContentService} from '../service/content.service';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

}
