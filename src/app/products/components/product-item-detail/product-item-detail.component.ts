import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

import { OrderedProduct, Product } from '../../interfaces/product';

@Component({
  selector: 'store-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {};
  itemOrdered?: OrderedProduct;
  
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) {}

  ngOnInit(): void {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
        .subscribe(product => this.product = product);
    this.itemOrdered = (this.cartService?.orderedItems).find(item => item.id === id);
  }

  changeCart(qty: number|null) {
    this.cartService.editCart({
      productId: <number>this.product.id,
      quantity: qty
    });
  }
}
