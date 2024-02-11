import { Injectable } from '@angular/core';
import { ProductServiceBase } from './product.service.base';
import { Observable, of, throwError } from 'rxjs';
import { Product, ProductCategories, ProductsPaginated } from '../models/product.model';
import { productCartMock, productMock } from '../mock-data/products.mock';

/***
 * Endpoints used are from https://dummyjson.com/docs/products
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductServiceBase {
  constructor() {
    console.log('%c===== Product Service Mock Init =====', 'color: green; font-weight: bold;');
  }

  public getAllProductCategories(): Observable<ProductCategories> {
    const productCategoriesMock: ProductCategories = [
      'Computers',
      'Cell-Phones',
      'Tablets',
      'Widgets',
    ];

    return of(productCategoriesMock);
    // return throwError(new Error());
  }

  public getAllProducts(): Observable<ProductsPaginated> {
    return of(productCartMock);
    // return throwError(new Error());
  }

  public getProductById(id: string): Observable<Product> {
    return of(productMock);
    // return throwError(new Error());
  }

  public getProductsOfCategory(category: string): Observable<ProductsPaginated> {
    return of(productCartMock);
    // return throwError(new Error());
  }

  public searchProducts(query: string): Observable<ProductsPaginated> {
    return of(productCartMock);
    // return throwError(new Error());
  }

  public addProduct(newProduct: Product): Observable<Product> {
    return of(productMock);
    // return throwError(new Error());
  }

  public updateProduct(updatedFields: Partial<Product>): Observable<Product> {
    return of(productMock);
    // return throwError(new Error());
  }

  public deleteProduct(id: number): Observable<Product> {
    return of(productMock);
    // return throwError(new Error());
  }

}
