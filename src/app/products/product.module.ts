import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductImageComponent } from './components/product-image/product-image.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductModule { }
