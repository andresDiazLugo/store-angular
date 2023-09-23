import { Component } from '@angular/core';
import { listProduct } from '../product/product';
import { CardService } from '../product/card.service';
import { Iproduct } from '../product/product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products = listProduct;
  
  constructor(
    private cartService: CardService,
  ){}

  probandoMsg(){
    alert("funcionandoooooooooooo")
  }
  addProductCart(product:Iproduct){
    try {
      this.cartService.addToCard(product)
    } catch (error) {
      alert("error add product")
    }
  }

}
