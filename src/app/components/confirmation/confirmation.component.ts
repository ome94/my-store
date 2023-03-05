import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'store-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  customer = '';

  constructor(private cartService: CartService,
        private route: ActivatedRoute) {}

  get total():number {
    return this.cartService.total;
  }

  ngOnInit(): void {
    this.customer = <string>this.route.snapshot.queryParamMap.get('customer');
  }
}
