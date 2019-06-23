import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartService} from '../../../service/cart.service';
import { Jacket } from '../../../interfaces/jacket.interface';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'app-cart-jacket',
  templateUrl: './cart-jacket.component.html',
  styleUrls: ['./cart-jacket.component.scss']
})
export class CartJacketComponent implements OnInit {

  constructor(private cartService: CartService, private contentService: ContentService) { }

  @Input() jacket: Jacket;
  @Output() add = new EventEmitter();
  amount: number = 0;

  ngOnInit() {
  }

  getImageUrl(){
    return `../../../assets/img/${this.jacket.image}`;
  }

  remove(id: number){
    this.cartService.remove(id);
    this.contentService.remove(id);
  }

  apply(){
    this.add.emit({id: this.jacket.id, amount: this.amount});
  }
}
