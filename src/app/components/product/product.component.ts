import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  product1 = {productName: 'Laptop', unitPrice: 11000};
  product2 = {productName: 'Book', unitPrice: 20};

  products = [this.product1, this.product2];
  
  constructor() { }

  ngOnInit(): void {
  }

}
