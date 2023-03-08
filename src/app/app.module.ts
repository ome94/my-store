import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    ProductModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
