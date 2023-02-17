import { Component, Input, OnInit } from '@angular/core';
import { faPen, faPlus, faMinus, faX, faCircleXmark, faSackXmark } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../../interfaces/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'store-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {};
  
  constructor(private userService: UserService) {}
  
  addIcon = faPlus;
  dropIcon = faMinus;
  penIcon = faPen;
  rmIcon = faSackXmark;
  xIcon = faCircleXmark;

  editQty = false;
  
  cart = this.userService.myCart

  ngOnInit(): void {
    this._orderedQty = this.cart.find(item => 
      item.productId === this.product.id
    )?.quantity || 0;
  }

  private _orderedQty = 0;
  
  get orderedQty(): number {
    return this._orderedQty;
  }

  set orderedQty(qty: number) {
    qty = qty > 0 ? qty : 0;

    let idx = this.cart.findIndex(
      item => item.productId === this.product.id
    );

    if(idx === -1){ // item is not in cart
      if (qty < 1) return;

      const newItem = {
        productId: <number>this.product.id,
        quantity: qty
      };

      // TODO:
      // make order request for product using a service
      this.cart.push(newItem);
      
    } else if (qty < 1) { // item is completely dropped from cart
      const [droppedItem] = this.cart.splice(idx, 1);
      
      // TODO
      // delete dropped item from db using a service

    } else {
      // TODO:
      // Increase cart item qty in db

      this.cart[idx].quantity = qty;
    }
    
    this._orderedQty = qty;
  }

  add() {
    this.orderedQty += 1;
  }

  drop() {
    this.orderedQty -= 1
  }

  remove() {
    this.orderedQty = 0
  }

  switchEdit() {
    this.editQty = !this.editQty;
  }
}
