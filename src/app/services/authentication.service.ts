import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly AUTH_URL = 'https://dummyjson.com/auth';

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>(`${this.AUTH_URL}/auth/login`, {username, password});
  }

  public getAuthUser(): Observable<AuthUser> {
    return this.httpClient.get<AuthUser>(`${this.AUTH_URL}/auth/me`);
  }
}
