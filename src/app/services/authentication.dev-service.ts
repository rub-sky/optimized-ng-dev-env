import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';
import { AuthenticationServiceBase } from './authentication.service.base';
import { User } from '../models/user.model';
import { USER_MOCK } from '../mock-data/user.mock';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationDevService implements AuthenticationServiceBase {
  constructor() {
    console.log('%c===== Authentication Service - [Mock] =====', 'color: cyan; font-weight: bold;');
  }

  public login(username: string, password: string): Observable<AuthUser> {
    const authUserMock: AuthUser = {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      gender: 'male',
      email: 'atuny0@sohu.com',
      username: 'atuny0',
      image: 'https://robohash.org/Terry.png?set=set4',
      token: 'blah'
    };

    return of(authUserMock);
    // return throwError(new Error());
  }

  public getAuthUser(): Observable<User> {
    const testUser: User = {
      ...USER_MOCK
    }

    return of(testUser);
    // return throwError(new Error());
  }
}
