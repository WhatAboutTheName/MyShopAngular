import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../service/cart.service';
import {User} from '../../../interfaces/user.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  user: User = new User();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  cancel(){
    this.cartService.cancel();
  }

  acept(){
    this.cartService.acept();
  }

}
