import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-label-jacket',
  templateUrl: './label-jacket.component.html',
  styleUrls: ['./label-jacket.component.scss']
})
export class LabelJacketComponent implements OnInit {

  @Input() jacket: { image: any; id: any; };
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
