import { Iproduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    items:Iproduct[] =[];
    constructor(private http :HttpClient) {}

    addToCard(product:Iproduct){
        const foundProducExists = this.items.find((element)=>{
            return JSON.stringify(element) === JSON.stringify(product)
        })
        if(!foundProducExists){
            this.items.push(product);
        }else{
            this.items.forEach((element) => {
                if(element.id == product.id){
                    element.price += product.price
                    element.quantity += 1
                }
            })

        }
        alert('Your product added with success');
    }
    getProducts(){
        return this.items
    }
    clearProducts(){
        this.items=[];
        return this.items
    }
   
}