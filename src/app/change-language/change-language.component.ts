import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../service/translation.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent implements OnInit {

  constructor(private translationService: TranslationService, private cartService: CartService) { }

  ngOnInit() {
  }

}
