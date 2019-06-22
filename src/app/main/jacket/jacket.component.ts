import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jacket } from 'src/app/interfaces/jacket.interface';

@Component({
  selector: 'app-jacket',
  templateUrl: './jacket.component.html',
  styleUrls: ['./jacket.component.scss']
})

export class JacketComponent implements OnInit {

  @Input() jacket: Jacket;
  @Output() add = new EventEmitter();
  amount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl(){
    return `../../../assets/img/${this.jacket.image}`;
  }

  addProduct(){
    this.add.emit({id: this.jacket.id, amount: this.amount});
  }

}
