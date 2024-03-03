import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { CartsPaginated } from '../models/cart.model';
import { UserServiceBase } from './user.service.base';

/**
 * Endpoints used are from https://dummyjson.com/docs/users
 */
@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceBase {
  private readonly USERS_URL = 'https://dummyjson.com/user';

  constructor(private httpClient: HttpClient) {
    console.log('%c===== User Service - [PROD] =====', 'color: orange; font-weight: bold;');
  }

  public getAuthUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.USERS_URL}/me`);
  }

  public getUsersCarts(userId: number): Observable<CartsPaginated> {
    return this.httpClient.get<CartsPaginated>(`${this.USERS_URL}/${userId}/carts`);
  }

  // TODO: Finish these
  // public getUsersPosts(userId: number): Observable<any> {
  //   return this.httpClient.get<any>(`${this.USERS_URL}/${userId}/posts`);
  // }

  // public getUsersToDos(userId: number): Observable<any> {
  //   return this.httpClient.get<any>(`${this.USERS_URL}/${userId}/todos`);
  // }
}
