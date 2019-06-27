import { Component, OnInit, HostListener } from '@angular/core';
import { triangleStart, jump, triangleFastStart} from '../animation/animation';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [
    triangleStart,
    jump,
    triangleFastStart
  ]
})
export class NotFoundComponent implements OnInit {

  @HostListener('window: keydown.ArrowUp') event(){
    this.jump();
  }
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  jump(){
    this.gameService.jump();
  }

  start(){
    this.gameService.start();
  }

}
