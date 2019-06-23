import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {

  constructor(private cartService: CartService, private contentService: ContentService) { }

  ngOnInit() {
    this.cartService.addContent();
    this.orderContent();
  }
  
  orderContent(){
    this.cartService.orderContent();
  }

  removeAll(){
    this.cartService.removeAll();
    this.contentService.removeAll();
  }

  cancel(){
    this.cartService.cancel();
  }
}
