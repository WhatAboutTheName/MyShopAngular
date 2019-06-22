import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../service/content.service';
import { Jacket } from '../../interfaces/jacket.interface';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(private contentService: ContentService, private http: HttpClient) { } 
    
    ngOnInit() {  
        return this.http.get('assets/jackets.json').subscribe((data:Jacket[]) => this.contentService.jackets=data); 
    }

    addProduct(event: {id: number, amount: number}){
        this.contentService.addProduct(event.id, event.amount);
    }       

}
