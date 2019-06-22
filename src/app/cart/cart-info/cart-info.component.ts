import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.addContent();
    this.orderContent();
  }
  
  orderContent(){
    this.cartService.orderContent();
  }

  removeAll(){
    this.cartService.removeAll();
  }

  cancel(){
    this.cartService.cancel();
  }
}
