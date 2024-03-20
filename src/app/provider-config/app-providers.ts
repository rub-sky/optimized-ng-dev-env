import { Provider } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { ProductService } from "../services/product.service";
import { UserService } from "../services/user.service";

export const AuthenticationServiceProvider: Provider = {
  provide: AuthenticationService,
  useClass: AuthenticationService
}

export const ProductServiceProvider: Provider = {
  provide: ProductService,
  useClass: ProductService
};

export const UserServiceProvider: Provider = {
  provide: UserService,
  useClass: UserService
};

export const APP_PROVIDERS: Provider[] = [
  AuthenticationServiceProvider,
  UserServiceProvider,
  ProductServiceProvider,
];
