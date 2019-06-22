import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslationService } from '../service/translation.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent implements OnInit {

  @ViewChild('language', {static: false}) Text: ElementRef;

  constructor(private translationService: TranslationService, private cartService: CartService) { }

  ngOnInit() {
  }

  change(){
    this.translationService.check(this.Text.nativeElement.value);
  }

}
