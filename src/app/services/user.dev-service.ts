import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { CartsPaginated } from '../models/cart.model';
import { UserServiceBase } from './user.service.base';
import { USER_MOCK } from '../mock-data/user.mock';

/**
 * NOTE - This is a local development service mock
 */
@Injectable({
  providedIn: 'root'
})
export class UserDevService implements UserServiceBase {
  constructor() {
    console.log('%c===== User Service Mock Init =====', 'color: cyan; font-weight: bold;');
  }

  public getAuthUser(): Observable<User> {
    const testUser: User = {
      ...USER_MOCK
    }

    return of(testUser);
    // return throwError(new Error());
  }

  public getUsersCarts(userId: number): Observable<CartsPaginated> {
    const sampleCart: CartsPaginated = {
      carts: [
        {
          id: 19,
          products: [
            {
              id: 43,
              title: 'frock gold printed',
              price: 600,
              quantity: 3,
              total: 1800,
              discountPercentage: 15.55,
              discountedPrice: 1520,
              thumbnail: 'https://cdn.dummyjson.com/product-images/43/thumbnail.jpg'
            },
            // more products
          ],
          total: 2492,
          discountedTotal: 2140,
          userId: 5, // user id is 5
          totalProducts: 5,
          totalQuantity: 14
        }
      ],
      total: 1,
      skip: 0,
      limit: 1
    };

    return of(sampleCart);
    // return throwError(new Error());
  }

  // TODO: Finish these
  // public getUsersPosts(userId: number): Observable<any> {
  //   return this.httpClient.get<any>(`${this.USERS_URL}/${userId}/posts`);
  // }

  // public getUsersToDos(userId: number): Observable<any> {
  //   return this.httpClient.get<any>(`${this.USERS_URL}/${userId}/todos`);
  // }
}
