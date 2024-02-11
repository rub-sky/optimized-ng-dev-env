import { Injectable } from '@angular/core';
import { ProductServiceBase } from './product.service.base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductCategories, ProductsPaginated } from '../models/product.model';

/***
 * Endpoints used are from https://dummyjson.com/docs/products
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductServiceBase {
  private readonly PRODUCTS_URL = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) { }

  public getAllProductCategories(): Observable<ProductCategories> {
    return this.httpClient.get<ProductCategories>(`${this.PRODUCTS_URL}/categories`);
  }

  public getAllProducts(): Observable<ProductsPaginated> {
    return this.httpClient.get<ProductsPaginated>(`${this.PRODUCTS_URL}`);
  }

  public getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.PRODUCTS_URL}/${id}`);
  }

  public getProductsOfCategory(category: string): Observable<ProductsPaginated> {
    return this.httpClient.get<ProductsPaginated>(`${this.PRODUCTS_URL}/category/${category}`);
  }

  public searchProducts(query: string): Observable<ProductsPaginated> {
    return this.httpClient.get<ProductsPaginated>(`${this.PRODUCTS_URL}/search?q=${query}`);
  }

  public addProduct(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.PRODUCTS_URL}/add`, {...newProduct});
  }

  public updateProduct(updatedFields: Partial<Product>): Observable<Product> {
    return this.httpClient.put<Product>(`${this.PRODUCTS_URL}/`, {...updatedFields});
  }

  public deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.PRODUCTS_URL}/${id}`);
  }

}
