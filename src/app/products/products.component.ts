import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ProductsPaginated } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public products$: Observable<ProductsPaginated>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAllProducts();
  }

}
