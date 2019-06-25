import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { removeAnimation } from '../../animation/animation';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss'],
  animations: [removeAnimation]
})
export class CartContentComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  apply(event: {id: number, amount: number}){
    this.cartService.apply(event.id, event.amount);
  }     
  
}
