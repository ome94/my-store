import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'store-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {};

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {}

  ngOnInit(): void {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
        .subscribe(product => this.product = product);
  }
}
