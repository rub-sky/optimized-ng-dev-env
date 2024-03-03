import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';
import { AuthenticationServiceBase } from './authentication.service.base';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthenticationServiceBase {
  private readonly AUTH_URL = 'https://dummyjson.com/auth';

  constructor(private httpClient: HttpClient) {
    console.log('%c===== Authentication Service - [PROD] =====', 'color: orange; font-weight: bold;');

  }

  public login(username: string, password: string): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>(`${this.AUTH_URL}/auth/login`, {username, password});
  }

  public getAuthUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.AUTH_URL}/auth/me`);
  }
}
