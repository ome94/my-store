import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faPlus, faMinus, faCircleXmark, faSackXmark } from '@fortawesome/free-solid-svg-icons';

import { OrderedProduct, Product } from '../../interfaces/product';

@Component({
  selector: 'store-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product = {};
  @Input() itemOrdered?: OrderedProduct;
  @Output() changeQty = new EventEmitter<number|null>();
  
  addIcon = faPlus;
  reduceIcon = faMinus;
  penIcon = faPen;
  rmIcon = faSackXmark;
  xIcon = faCircleXmark;

  editQty = false;
  private _orderedQty = this.itemOrdered?.quantity
  
  get orderedQty(): number|null|undefined {
    return this._orderedQty;
  }

  set orderedQty(qty: number|null|undefined) {
    qty = this.editQty && (!qty || qty < 1) ? null : qty

    this.changeQty.emit(qty);
    this._orderedQty = qty;
  }

  ngOnInit() {
    this._orderedQty = this.itemOrdered?.quantity;
  }

  add() {
    if (!this.orderedQty || <number>this.orderedQty < 0)
      this._orderedQty = 0;
      
    this.orderedQty = <number>this.orderedQty + 1;
  }

  reduce() {
    if(this.orderedQty)
      this.orderedQty -= 1
  }

  remove() {
    this.orderedQty = 0
  }

  switchEdit() {
    this.editQty = !this.editQty;
  }
}
