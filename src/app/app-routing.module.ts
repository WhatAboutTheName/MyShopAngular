import { Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { CategoriesContentComponent } from './main/categories-content/categories-content.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'label', component: CategoriesContentComponent },
  { path: '**', component: NotFoundComponent }
];

