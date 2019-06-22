import { Component, OnInit } from '@angular/core';
import { Jacket } from '../../interfaces/jacket.interface';
import {HttpClient} from '@angular/common/http';
import {ContentService} from '../../service/content.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    constructor(private http: HttpClient, private contentService: ContentService) {} 
    
    ngOnInit() {  
        this.http.get('assets/jackets.json').subscribe((data:Jacket[]) => this.contentService.jackets = data);
    }
    
    ngDoCheck(){
        this.contentService.addCategories();
    }

    getLabelContent(label: string){
        this.contentService.getLabelContent(label);
    }
}
