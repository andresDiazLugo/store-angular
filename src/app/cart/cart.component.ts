import { Component } from '@angular/core';
import { CardService } from '../product/card.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products = this.cartService.getProducts();
  constructor(
    private cartService: CardService
  ){
    console.log("products",this.products);
  }
}
