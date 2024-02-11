import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { CartsPaginated } from "../models/cart.model";

export abstract class UserService {
  public abstract getAuthUser(): Observable<User>;
  public abstract getUsersCarts(userId: number): Observable<CartsPaginated>;
}