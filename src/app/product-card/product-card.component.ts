import { HttpClient } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';

export type Product = {
  id: 1,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
};

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products').subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  @Input() products!: Product[];
}
