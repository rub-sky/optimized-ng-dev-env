import { Observable } from "rxjs";
import { AuthUser } from "../models/auth-user.model";

export abstract class AuthenticationServiceBase {
  public abstract login(username: string, password: string): Observable<AuthUser>;
  public abstract getAuthUser(): Observable<AuthUser>;
}
