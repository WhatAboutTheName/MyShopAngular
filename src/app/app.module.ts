import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule }  from '@angular/router';
import { appRoutes } from './app-routing.module';
import {MatButtonModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { ContentComponent } from './main/content/content.component';
import { HeaderComponent } from './header/header.component';

import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { CategoriesContentComponent } from './main/categories-content/categories-content.component';

import { CartInfoComponent } from './cart/cart-info/cart-info.component';
import { CartContentComponent } from './cart/cart-content/cart-content.component';
import { JacketComponent } from './main/jacket/jacket.component';
import { LabelContentComponent } from './main/label-content/label-content.component';
import { LabelJacketComponent } from './main/label-jacket/label-jacket.component';
import { OrderComponent } from './cart/cart-info/order/order.component';
import { CartJacketComponent } from './cart/cart-content/cart-jacket/cart-jacket.component';
import { AlertsComponent } from './alerts/alerts.component';

import {ContentService} from './service/content.service';
import {CartService} from './service/cart.service';
import {TranslationService} from './service/translation.service';
import {ScrollService} from './service/scroll.service';

import { TranslatePipe } from './translation/translate.pipe';
import { ChangeLanguageComponent } from './change-language/change-language.component';
import { ScrollTopComponent } from './main/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ContentComponent,
    HeaderComponent,
    CartComponent,
    AboutComponent,
    NotFoundComponent,
    MainComponent,
    CategoriesContentComponent,
    CartInfoComponent,
    CartContentComponent,
    JacketComponent,
    LabelContentComponent,
    LabelJacketComponent,
    OrderComponent,
    CartJacketComponent,
    AlertsComponent,
    TranslatePipe,
    ChangeLanguageComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [
    ContentService,
    CartService,
    TranslationService,
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
