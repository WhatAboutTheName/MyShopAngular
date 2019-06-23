import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'; 
import {routerTransition} from './animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    routerTransition
  ]
})

export class AppComponent {
  routState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}