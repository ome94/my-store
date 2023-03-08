import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

import { Product } from '../../interfaces/product';
import { CartItem } from '../../../cart/interfaces/cart-item';

@Component({
  selector: 'store-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  editCart(item: CartItem) {
    this.cartService.editCart(item)
  }
}
