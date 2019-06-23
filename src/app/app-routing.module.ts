import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { CategoriesContentComponent } from './main/categories-content/categories-content.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: MainComponent, data: { animation: 'Main' }},
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'label', component: CategoriesContentComponent, data: { animation: 'Label' } },
  { path: '**', component: NotFoundComponent }
];